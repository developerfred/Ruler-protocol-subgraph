import { BigInt } from "@graphprotocol/graph-ts"
import {
  RulerToken,
  Approval,
  OwnershipTransferred,
  Transfer
} from "../generated/RulerToken/RulerToken"
import { Swap, Mint, Burn, Sync } from '../generated/RulerSushiLP/RulerSushiLP'
import { Deposit, Withdraw, PausedStatusUpdated } from '../generated/RulerMining/RulerMining'
import { RulerTransfer, RulerOwnershipTransferred, RulerSwap, RulerMint, RulerBurn, RulerSync, RulerDeposit, RulerWithdraw, RulerPausedStatusUpdated } from "../generated/schema"

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let OwnershipTransfer = new RulerOwnershipTransferred(event.transaction.from.toHex())

  OwnershipTransfer.previousOwner = event.params.previousOwner;
  OwnershipTransfer.previousOwner = event.params.newOwner;
  OwnershipTransfer.save()
}

export function handleTransfer(event: Transfer): void {
  
  let rulerToken = new RulerTransfer(event.transaction.from.toHex())
  rulerToken.from = event.params.from;
  rulerToken.to = event.params.to;
  rulerToken.value = event.params.value;

  rulerToken.save()
}

export function handleSwap(event: Swap): void {
  
  let swap = new RulerSwap(event.transaction.from.toHex())
  swap.sender = event.params.sender;
  swap.amount0In = event.params.amount0In;
  swap.amount1In = event.params.amount1In;
  swap.amount0Out = event.params.amount0Out;
  swap.amount1Out = event.params.amount1Out;
  swap.to = event.params.to;

  swap.save()
}

export function handleMint(event: Mint): void {
  
  let mint = new RulerMint(event.transaction.from.toHex())
  mint.sender = event.params.sender;
  mint.amount0 = event.params.amount0;
  mint.amount1 = event.params.amount1;

  mint.save();
}

export function handleBurn(event: Burn): void {
  
  let burn = new RulerBurn(event.transaction.from.toHex())
  burn.amount0 = event.params.amount0;
  burn.amount1 = event.params.amount1;

  burn.save();
}

export function handleSync(event: Sync): void {
  
  let sync = new RulerSync(event.transaction.from.toHex())
  sync.reserve0 = event.params.reserve0;
  sync.reserve1 = event.params.reserve1;

  sync.save();
}

export function handleWithdraw(event: Withdraw): void {
  
  let whitdraw = new RulerWithdraw(event.transaction.from.toHex())
  whitdraw._lpToken = event.params.lpToken
  whitdraw._amount = event.params.amount

  whitdraw.save()
}

export function handleDeposit(event: Deposit): void {
  
  let deposit = new RulerDeposit(event.transaction.from.toHex())
  deposit.lpToken = event.params.lpToken
  deposit.amount = event.params.amount

  deposit.save()
}
