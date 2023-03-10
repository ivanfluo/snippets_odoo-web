new TypeIt("#simpleUsage", {
    speed: 80,
    waitUntilVisible: true,
    loop:true,
  }).go();

  setTimeout(() => {
    instance.freeze();
  
    setTimeout(() => {
      instance.unfreeze();
    }, 3000);
  }, 500);
  