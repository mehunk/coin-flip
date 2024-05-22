// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;

/// @title CoinFlip
/// @author mehunk
/// @notice You can use this contract for only the most basic simulation
/// @dev All function calls are currently implemented with mock
/// @custom:experimental This is an experimental contract.
/// @custom:todo withdraw function
/// @custom:todo store the owner
contract CoinFlip {
  /// Place bets, guess and then get the result
  /// @param heads Heads or tails, true for heads and false for tails
  /// @return winning or losing, true for winning and false for losing
  /// @custom:todo Place bets
  function flipCoin(bool heads) public pure returns (bool) {
    bool _heads = getRandomBool();

    return heads == _heads;
  }

  /// Return a random boolean
  /// @notice Now it only returns a fixed result for development
  /// @dev Now it only returns a fixed result for development
  /// @return Random boolean
  /// @custom:todo Generate real random boolean
  function getRandomBool() private pure returns (bool) {
    return true;
  }
}
