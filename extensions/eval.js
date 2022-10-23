class js {
 
    getInfo() {
      return {
        id: '123456',
        name: 'Javascript',
        blocks: [    
  {
            opcode: 'js',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Javascript [text]',
            arguments: {
              text: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'console.log("Hello World!");'
              }}
          }, 
  
  {
            opcode: 'jsr',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Javascript [text]',
            arguments: {
              text: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '1+1'
              }}
          }  
  
  
  
          
        ]
  };}
  
  js(args) {
      eval(args.text);
      return 0;
    };
  
    jsr(args) {
      var response = eval(args.text);
      return response;
    };
  
  }
  
  Scratch.extensions.register(new js());