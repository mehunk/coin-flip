// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;

import '@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol';
import './PriceConverter.sol';

/// @title CoinFlip
/// @author mehunk
/// @notice You can use this contract for only the most basic simulation
/// @dev All function calls are currently implemented with mock
/// @custom:experimental This is an experimental contract.
/// @custom:todo withdraw function
/// @custom:todo store the owner
contract CoinFlip {
  using PriceConverter for uint256;

  event Land(address sender, bool won);

  AggregatorV3Interface private s_priceFeed;

  /// @notice 1 USD with 18 decimals
  uint256 public constant MINIMUM_USD = 1e18;

  constructor(address priceFeedAddress) {
    s_priceFeed = AggregatorV3Interface(priceFeedAddress);
  }

  /// Place bets, guess and then get the result
  /// @param heads Heads or tails, true for heads and false for tails
  function flipCoin(bool heads) public payable {
    require(
      msg.value.getConversionRate(s_priceFeed) >= MINIMUM_USD,
      'You need to spend more ETH!'
    );

    bool _heads = getRandomBool();

    emit Land(msg.sender, heads == _heads);
  }

  /// Return a random boolean
  /// @notice Now it only returns a fixed result for development
  /// @dev Now it only returns a fixed result for development
  /// @return Random boolean
  /// @custom:todo Generate real random boolean
  function getRandomBool() private pure returns (bool) {
    return true;
  }

  function getPriceFeed() public view returns (AggregatorV3Interface) {
    return s_priceFeed;
  }
}
