const epochProgress = document.getElementById('epoch-progress');
const blockHeight = document.getElementById('block-height');
const gasFee = document.getElementById('gas-fee');
const stakers = document.getElementById('stakers');

let block = 10483291;
let gas = 0.00042;
let stakerCount = 486233;
let progress = 68;

setInterval(() => {
  block += Math.floor(Math.random() * 4) + 1;
  gas = Math.max(0.00018, gas + (Math.random() - 0.5) * 0.00003);
  stakerCount += Math.floor(Math.random() * 3);
  progress = (progress + Math.random() * 1.8) % 100;

  blockHeight.textContent = block.toLocaleString('en-US');
  gasFee.textContent = `${gas.toFixed(5)} PGN`;
  stakers.textContent = stakerCount.toLocaleString('en-US');
  epochProgress.style.width = `${progress.toFixed(1)}%`;
}, 1900);
