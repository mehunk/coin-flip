// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import '@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol';

library PriceConverter {
  function getPrice(
    AggregatorV3Interface priceFeed
  ) internal view returns (uint256) {
    // Sepolia ETH / USD Address
    // https://docs.chain.link/data-feeds/price-feeds/addresses#Sepolia%20Testnet
    (, int256 answer, , , ) = priceFeed.latestRoundData();
    // ETH/USD rate in 18 digit
    return uint256(answer * 1e10);
  }

  // 1000000000
  function getConversionRate(
    uint256 ethAmount,
    AggregatorV3Interface priceFeed
  ) internal view returns (uint256) {
    uint256 ethPrice = getPrice(priceFeed);
    uint256 ethAmountInUsd = (ethPrice * ethAmount) / 1e18;
    // the actual ETH/USD conversion rate, after adjusting the extra 0s.
    return ethAmountInUsd;
  }
}
