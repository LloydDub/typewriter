let sent = "I like cats";
sent += "\n"

for (let i = 0; i < sent.length; i++) {  
  let delay = i * 50;
  setTimeout(() => {
   process.stdout.write(`${sent[i]}`)    
  }, delay)  
}   

