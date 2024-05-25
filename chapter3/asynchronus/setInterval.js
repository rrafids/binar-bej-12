let i = 0;

const iniInterval = setInterval(() => {
  if (i === 10) {
    clearInterval(iniInterval);
  }

  console.log("Iterasi ke-" + i);
  i++;
}, 100)

iniInterval;