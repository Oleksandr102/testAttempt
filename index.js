const attemptV1 = (available, allowed, preferred) => {
    if (available.length === 0 || allowed.length === 0 || preferred.length === 0) return [];
    const allowedValues = allowed.filter(item => available.includes(item));
    if (allowedValues.length === 0) return [];
    const preferredValues = preferred.filter(item => allowedValues.includes(item));
    if (preferredValues.length) return preferredValues;
    const res = [];

    for (const item of preferred) {
        res.push(allowedValues.reduce((a, b) => Math.abs(b - item) < Math.abs(a - item) ? b : a));
    }

    return [...new Set(res)];
}

console.log(attemptV1([240, 360, 720], [360, 720], [1080]));

console.log(attemptV1([240, 720], [360, 720], [1080]));

console.log(attemptV1([240], [360, 720], [1080]));

console.log(attemptV1([240, 360, 720], [240, 360, 720, 1080], [240, 360]));

console.log(attemptV1([240, 720], [240, 360, 720, 1080], [240, 360]));

console.log(attemptV1([240, 720], [240, 360, 1080], [240, 360]));

console.log(attemptV1([720], [240, 360, 1080], [240, 360]));

console.log(attemptV1([240, 360], [240, 360], [720, 1080]));



const attemptV2 = (available, allowed, preferred) => {
    if (available.length === 0 || allowed.length === 0 || preferred.length === 0) return [];
    if (allowed.includes('any')) allowed = available;
    const allowedValues = allowed.filter(item => available.includes(item));
    if (preferred.includes('any')) preferred = allowedValues;
    if(allowedValues.length === 0) return []; 
    const preferredValues = preferred.filter(item => allowedValues.includes(item));
    if(preferredValues.length) return preferredValues;
    const res = [];
  
    for(const item of preferred) {
      res.push(allowedValues.reduce((a, b) => Math.abs(b - item) < Math.abs(a - item) ? b : a));
    }
  
    return [...new Set(res)]
  }

  console.log(attemptV2([240, 360, 720], [360, 'any'], [360, 720]));

  console.log(attemptV2([240, 360, 720], [240, 360, 720], ['any', 720]));

  console.log(attemptV2([240, 360, 720], [360, 1080], ['any', 720]));
  
  console.log(attemptV2([240, 360, 720], [1080], ['any', 720]));