const CreateTransferPRB = artifacts.require("createTransferPRB");
const UseBurnPRB = artifacts.require("useBurnPRB");

contract("createTransferSpectrumTokens", accounts =>{
  const [firstAccount,secondAccount,thirdAccount,fourhtAccount,fifthAccount,sixthAccount,seventhAccount,eightAccount,ninethAccount,tenthAccount] = accounts;

  it("Sets the Primary User (PU) as owner of the contract", async () =>{
    const createTransferPRB = await CreateTransferPRB.new();
    assert.equal(await createTransferPRB.owner.call(),firstAccount)
  });

  it("Only PU can register a Secondary User (SU)", async () =>{
    const createTransferPRB = await CreateTransferPRB.new();
    await createTransferPRB.registerSU(secondAccount,{from:firstAccount});
    assert.equal(await createTransferPRB.isSURegistered.call(),1);
  });
  it("Correctly registers  Secondary Users (SU)", async () =>{
    const createTransferPRB = await CreateTransferPRB.new();
    await createTransferPRB.registerSU(secondAccount,{from:firstAccount});
    await createTransferPRB.registerSU(thirdAccount,{from:firstAccount});
    assert.equal(await createTransferPRB.isSURegistered.call(),1);
  });

  it("Only SU can register a Spectrum Token", async () =>{
    const createTransferPRB = await CreateTransferPRB.new();
    await createTransferPRB.registerSU(secondAccount,{from:firstAccount});
    await createTransferPRB.registerPRB(5,{from:firstAccount});
    assert.equal(await createTransferPRB.availablePRBs.call(),5);
  });
  it("Correctly registers multiple Spectrum Tokens (e.g., PRBs)", async () =>{
    const createTransferPRB = await CreateTransferPRB.new();
    await createTransferPRB.registerSU(secondAccount,{from:firstAccount});
    await createTransferPRB.registerPRB(5,{from:firstAccount});
    await createTransferPRB.registerPRB(5,{from:firstAccount});
    await createTransferPRB.registerPRB(5,{from:firstAccount});
    assert.equal(await createTransferPRB.availablePRBs.call(),15);
  });

  it("Transfer a Spectrum Token (e.g., PRB) from the contract to a Secondary User (SU)", async () =>{
    const createTransferPRB = await CreateTransferPRB.new();
    await createTransferPRB.registerSU(secondAccount,{from:firstAccount});
    await createTransferPRB.registerPRB(5,{from:firstAccount});
    await createTransferPRB.transferPRB(4,{from:secondAccount});
    assert.equal(await createTransferPRB.availablePRBs.call(),1);
  });

  it("Transfer 1 Spectrum Token (e.g., PRB) (From PU) to each registered SU  (2 Transfers/2 SU) ", async () =>{
    const createTransferPRB = await CreateTransferPRB.new();
    await createTransferPRB.registerSU(secondAccount,{from:firstAccount});
    await createTransferPRB.registerSU(thirdAccount,{from:firstAccount});
    await createTransferPRB.registerPRB(5,{from:firstAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    assert.equal(await createTransferPRB.availablePRBs.call(),3);
  });

  it("Transfer 1 Spectrum Token (e.g., PRB) (From PU) to each registered SU (5 Transfers/5 SU)", async () =>{
    const createTransferPRB = await CreateTransferPRB.new();
    await createTransferPRB.registerSU(secondAccount,{from:firstAccount});
    await createTransferPRB.registerSU(thirdAccount,{from:firstAccount});
    await createTransferPRB.registerSU(fourhtAccount,{from:firstAccount});
    await createTransferPRB.registerSU(fifthAccount,{from:firstAccount});
    await createTransferPRB.registerPRB(5,{from:firstAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    await createTransferPRB.transferPRB(1,{from:fourhtAccount});
    await createTransferPRB.transferPRB(1,{from:fifthAccount});
    assert.equal(await createTransferPRB.availablePRBs.call(),1);
  });

  it("Transfer 1 Spectrum Token (e.g., PRB) (From PU) to each registered SU (10 Transfers/10 SU)", async () =>{
    const createTransferPRB = await CreateTransferPRB.new();
    await createTransferPRB.registerSU(secondAccount,{from:firstAccount});
    await createTransferPRB.registerSU(thirdAccount,{from:firstAccount});
    await createTransferPRB.registerSU(fourhtAccount,{from:firstAccount});
    await createTransferPRB.registerSU(fifthAccount,{from:firstAccount});
    await createTransferPRB.registerSU(sixthAccount,{from:firstAccount});
    await createTransferPRB.registerSU(seventhAccount,{from:firstAccount});
    await createTransferPRB.registerSU(eightAccount,{from:firstAccount});
    await createTransferPRB.registerSU(ninethAccount,{from:firstAccount});
    await createTransferPRB.registerSU(tenthAccount,{from:firstAccount});
    await createTransferPRB.registerPRB(10,{from:firstAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    await createTransferPRB.transferPRB(1,{from:fourhtAccount});
    await createTransferPRB.transferPRB(1,{from:fifthAccount});
    await createTransferPRB.transferPRB(1,{from:sixthAccount});
    await createTransferPRB.transferPRB(1,{from:seventhAccount});
    await createTransferPRB.transferPRB(1,{from:eightAccount});
    await createTransferPRB.transferPRB(1,{from:ninethAccount});
    await createTransferPRB.transferPRB(1,{from:tenthAccount});
    assert.equal(await createTransferPRB.availablePRBs.call(),1);
  });

  it("Transfer 1 Spectrum Token (e.g., PRB) (From PU) to each registered SU (20 Transfers/10 SU)", async () =>{
    const createTransferPRB = await CreateTransferPRB.new();
    await createTransferPRB.registerSU(secondAccount,{from:firstAccount});
    await createTransferPRB.registerSU(thirdAccount,{from:firstAccount});
    await createTransferPRB.registerSU(fourhtAccount,{from:firstAccount});
    await createTransferPRB.registerSU(fifthAccount,{from:firstAccount});
    await createTransferPRB.registerSU(sixthAccount,{from:firstAccount});
    await createTransferPRB.registerSU(seventhAccount,{from:firstAccount});
    await createTransferPRB.registerSU(eightAccount,{from:firstAccount});
    await createTransferPRB.registerSU(ninethAccount,{from:firstAccount});
    await createTransferPRB.registerSU(tenthAccount,{from:firstAccount});
    await createTransferPRB.registerPRB(20,{from:firstAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    await createTransferPRB.transferPRB(1,{from:fourhtAccount});
    await createTransferPRB.transferPRB(1,{from:fifthAccount});
    await createTransferPRB.transferPRB(1,{from:sixthAccount});
    await createTransferPRB.transferPRB(1,{from:seventhAccount});
    await createTransferPRB.transferPRB(1,{from:eightAccount});
    await createTransferPRB.transferPRB(1,{from:ninethAccount});
    await createTransferPRB.transferPRB(1,{from:tenthAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    await createTransferPRB.transferPRB(1,{from:fourhtAccount});
    await createTransferPRB.transferPRB(1,{from:fifthAccount});
    await createTransferPRB.transferPRB(1,{from:sixthAccount});
    await createTransferPRB.transferPRB(1,{from:seventhAccount});
    await createTransferPRB.transferPRB(1,{from:eightAccount});
    await createTransferPRB.transferPRB(1,{from:ninethAccount});
    await createTransferPRB.transferPRB(1,{from:tenthAccount});
    assert.equal(await createTransferPRB.availablePRBs.call(),2);
  });


  it("Transfer 1 Spectrum Token (e.g., PRB) (From PU) to each registered SU (50 Transfers/10 SU)", async () =>{
    const createTransferPRB = await CreateTransferPRB.new();
    await createTransferPRB.registerSU(secondAccount,{from:firstAccount});
    await createTransferPRB.registerSU(thirdAccount,{from:firstAccount});
    await createTransferPRB.registerSU(fourhtAccount,{from:firstAccount});
    await createTransferPRB.registerSU(fifthAccount,{from:firstAccount});
    await createTransferPRB.registerSU(sixthAccount,{from:firstAccount});
    await createTransferPRB.registerSU(seventhAccount,{from:firstAccount});
    await createTransferPRB.registerSU(eightAccount,{from:firstAccount});
    await createTransferPRB.registerSU(ninethAccount,{from:firstAccount});
    await createTransferPRB.registerSU(tenthAccount,{from:firstAccount});
    await createTransferPRB.registerPRB(50,{from:firstAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    await createTransferPRB.transferPRB(1,{from:fourhtAccount});
    await createTransferPRB.transferPRB(1,{from:fifthAccount});
    await createTransferPRB.transferPRB(1,{from:sixthAccount});
    await createTransferPRB.transferPRB(1,{from:seventhAccount});
    await createTransferPRB.transferPRB(1,{from:eightAccount});
    await createTransferPRB.transferPRB(1,{from:ninethAccount});
    await createTransferPRB.transferPRB(1,{from:tenthAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    await createTransferPRB.transferPRB(1,{from:fourhtAccount});
    await createTransferPRB.transferPRB(1,{from:fifthAccount});
    await createTransferPRB.transferPRB(1,{from:sixthAccount});
    await createTransferPRB.transferPRB(1,{from:seventhAccount});
    await createTransferPRB.transferPRB(1,{from:eightAccount});
    await createTransferPRB.transferPRB(1,{from:ninethAccount});
    await createTransferPRB.transferPRB(1,{from:tenthAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    await createTransferPRB.transferPRB(1,{from:fourhtAccount});
    await createTransferPRB.transferPRB(1,{from:fifthAccount});
    await createTransferPRB.transferPRB(1,{from:sixthAccount});
    await createTransferPRB.transferPRB(1,{from:seventhAccount});
    await createTransferPRB.transferPRB(1,{from:eightAccount});
    await createTransferPRB.transferPRB(1,{from:ninethAccount});
    await createTransferPRB.transferPRB(1,{from:tenthAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    await createTransferPRB.transferPRB(1,{from:fourhtAccount});
    await createTransferPRB.transferPRB(1,{from:fifthAccount});
    await createTransferPRB.transferPRB(1,{from:sixthAccount});
    await createTransferPRB.transferPRB(1,{from:seventhAccount});
    await createTransferPRB.transferPRB(1,{from:eightAccount});
    await createTransferPRB.transferPRB(1,{from:ninethAccount});
    await createTransferPRB.transferPRB(1,{from:tenthAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    await createTransferPRB.transferPRB(1,{from:fourhtAccount});
    await createTransferPRB.transferPRB(1,{from:fifthAccount});
    await createTransferPRB.transferPRB(1,{from:sixthAccount});
    await createTransferPRB.transferPRB(1,{from:seventhAccount});
    await createTransferPRB.transferPRB(1,{from:eightAccount});
    await createTransferPRB.transferPRB(1,{from:ninethAccount});
    await createTransferPRB.transferPRB(1,{from:tenthAccount});
    
    assert.equal(await createTransferPRB.availablePRBs.call(),5);
  });
  it("Transfer 1 Spectrum Token (e.g., PRB) (From PU) to each registered SU (100 Transfers/10 SU)", async () =>{
    const createTransferPRB = await CreateTransferPRB.new();
    await createTransferPRB.registerSU(secondAccount,{from:firstAccount});
    await createTransferPRB.registerSU(thirdAccount,{from:firstAccount});
    await createTransferPRB.registerSU(fourhtAccount,{from:firstAccount});
    await createTransferPRB.registerSU(fifthAccount,{from:firstAccount});
    await createTransferPRB.registerSU(sixthAccount,{from:firstAccount});
    await createTransferPRB.registerSU(seventhAccount,{from:firstAccount});
    await createTransferPRB.registerSU(eightAccount,{from:firstAccount});
    await createTransferPRB.registerSU(ninethAccount,{from:firstAccount});
    await createTransferPRB.registerSU(tenthAccount,{from:firstAccount});
    await createTransferPRB.registerPRB(100,{from:firstAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    await createTransferPRB.transferPRB(1,{from:fourhtAccount});
    await createTransferPRB.transferPRB(1,{from:fifthAccount});
    await createTransferPRB.transferPRB(1,{from:sixthAccount});
    await createTransferPRB.transferPRB(1,{from:seventhAccount});
    await createTransferPRB.transferPRB(1,{from:eightAccount});
    await createTransferPRB.transferPRB(1,{from:ninethAccount});
    await createTransferPRB.transferPRB(1,{from:tenthAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    await createTransferPRB.transferPRB(1,{from:fourhtAccount});
    await createTransferPRB.transferPRB(1,{from:fifthAccount});
    await createTransferPRB.transferPRB(1,{from:sixthAccount});
    await createTransferPRB.transferPRB(1,{from:seventhAccount});
    await createTransferPRB.transferPRB(1,{from:eightAccount});
    await createTransferPRB.transferPRB(1,{from:ninethAccount});
    await createTransferPRB.transferPRB(1,{from:tenthAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    await createTransferPRB.transferPRB(1,{from:fourhtAccount});
    await createTransferPRB.transferPRB(1,{from:fifthAccount});
    await createTransferPRB.transferPRB(1,{from:sixthAccount});
    await createTransferPRB.transferPRB(1,{from:seventhAccount});
    await createTransferPRB.transferPRB(1,{from:eightAccount});
    await createTransferPRB.transferPRB(1,{from:ninethAccount});
    await createTransferPRB.transferPRB(1,{from:tenthAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    await createTransferPRB.transferPRB(1,{from:fourhtAccount});
    await createTransferPRB.transferPRB(1,{from:fifthAccount});
    await createTransferPRB.transferPRB(1,{from:sixthAccount});
    await createTransferPRB.transferPRB(1,{from:seventhAccount});
    await createTransferPRB.transferPRB(1,{from:eightAccount});
    await createTransferPRB.transferPRB(1,{from:ninethAccount});
    await createTransferPRB.transferPRB(1,{from:tenthAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    await createTransferPRB.transferPRB(1,{from:fourhtAccount});
    await createTransferPRB.transferPRB(1,{from:fifthAccount});
    await createTransferPRB.transferPRB(1,{from:sixthAccount});
    await createTransferPRB.transferPRB(1,{from:seventhAccount});
    await createTransferPRB.transferPRB(1,{from:eightAccount});
    await createTransferPRB.transferPRB(1,{from:ninethAccount});
    await createTransferPRB.transferPRB(1,{from:tenthAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    await createTransferPRB.transferPRB(1,{from:fourhtAccount});
    await createTransferPRB.transferPRB(1,{from:fifthAccount});
    await createTransferPRB.transferPRB(1,{from:sixthAccount});
    await createTransferPRB.transferPRB(1,{from:seventhAccount});
    await createTransferPRB.transferPRB(1,{from:eightAccount});
    await createTransferPRB.transferPRB(1,{from:ninethAccount});
    await createTransferPRB.transferPRB(1,{from:tenthAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    await createTransferPRB.transferPRB(1,{from:fourhtAccount});
    await createTransferPRB.transferPRB(1,{from:fifthAccount});
    await createTransferPRB.transferPRB(1,{from:sixthAccount});
    await createTransferPRB.transferPRB(1,{from:seventhAccount});
    await createTransferPRB.transferPRB(1,{from:eightAccount});
    await createTransferPRB.transferPRB(1,{from:ninethAccount});
    await createTransferPRB.transferPRB(1,{from:tenthAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    await createTransferPRB.transferPRB(1,{from:fourhtAccount});
    await createTransferPRB.transferPRB(1,{from:fifthAccount});
    await createTransferPRB.transferPRB(1,{from:sixthAccount});
    await createTransferPRB.transferPRB(1,{from:seventhAccount});
    await createTransferPRB.transferPRB(1,{from:eightAccount});
    await createTransferPRB.transferPRB(1,{from:ninethAccount});
    await createTransferPRB.transferPRB(1,{from:tenthAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    await createTransferPRB.transferPRB(1,{from:fourhtAccount});
    await createTransferPRB.transferPRB(1,{from:fifthAccount});
    await createTransferPRB.transferPRB(1,{from:sixthAccount});
    await createTransferPRB.transferPRB(1,{from:seventhAccount});
    await createTransferPRB.transferPRB(1,{from:eightAccount});
    await createTransferPRB.transferPRB(1,{from:ninethAccount});
    await createTransferPRB.transferPRB(1,{from:tenthAccount});
    await createTransferPRB.transferPRB(1,{from:secondAccount});
    await createTransferPRB.transferPRB(1,{from:thirdAccount});
    await createTransferPRB.transferPRB(1,{from:fourhtAccount});
    await createTransferPRB.transferPRB(1,{from:fifthAccount});
    await createTransferPRB.transferPRB(1,{from:sixthAccount});
    await createTransferPRB.transferPRB(1,{from:seventhAccount});
    await createTransferPRB.transferPRB(1,{from:eightAccount});
    await createTransferPRB.transferPRB(1,{from:ninethAccount});
    await createTransferPRB.transferPRB(1,{from:tenthAccount});
    assert.equal(await createTransferPRB.availablePRBs.call(),10);
  });



});

contract("useBurnSpectrumTokens", accounts =>{
  const [firstAccount,secondAccount,thirdAccount,fourhtAccount,fifthAccount,sixthAccount,seventhAccount,eightAccount,ninethAccount,tenthAccount] = accounts;

  it("Sets the Primary User (PU) as owner of the contract", async () =>{
    const useBurnPRB = await UseBurnPRB.new();
    assert.equal(await useBurnPRB.owner.call(),firstAccount)
  });

  it("Receives used Spectrum Tokens (e.g., PRBs) (1 Transfer / 1 SU)", async () =>{
    const useBurnPRB = await UseBurnPRB.new();
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1})
    assert.equal(await useBurnPRB.receivedPRBs.call(),1)
  });

  it("Only PU can 'burn' the received funds", async () =>{
    const useBurnPRB = await UseBurnPRB.new();
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.burnPRB({from:firstAccount})
    assert.equal(await useBurnPRB.burntPRBs.call(),1)
  });

  it("Funds can be 'burnt' (transfered)", async () =>{
    const useBurnPRB = await UseBurnPRB.new();
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.burnPRB({from:firstAccount})
    assert.equal(await useBurnPRB.burntPRBs.call(),2)
  });

  it("Receives used Spectrum Tokens (e.g., PRBs) (5 Transfer / 5 SU)", async () =>{
    const useBurnPRB = await UseBurnPRB.new();
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    assert.equal(await useBurnPRB.receivedPRBs.call(),5)
  });

  it("Receives used Spectrum Tokens (e.g., PRBs) (10 Transfer / 10 SU)", async () =>{
    const useBurnPRB = await UseBurnPRB.new();
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    assert.equal(await useBurnPRB.receivedPRBs.call(),10)
  });

  it("Receives used Spectrum Tokens (e.g., PRBs) (20 Transfer / 10 SU)", async () =>{
    const useBurnPRB = await UseBurnPRB.new();
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    assert.equal(await useBurnPRB.receivedPRBs.call(),20)
  });


  it("Receives used Spectrum Tokens (e.g., PRBs) (50 Transfer / 10 SU)", async () =>{
    const useBurnPRB = await UseBurnPRB.new();
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    assert.equal(await useBurnPRB.receivedPRBs.call(),50)
  });

  it("Receives used Spectrum Tokens (e.g., PRBs) (100 Transfer / 10 SU)", async () =>{
    const useBurnPRB = await UseBurnPRB.new();
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 })
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 })
    assert.equal(await useBurnPRB.receivedPRBs.call(),100)
  });

  it("Receives used Spectrum Tokens (e.g., PRBs) (5 Transfer / 5 SU) // 'Burns' (tranfers) received PRBs", async () =>{
    const useBurnPRB = await UseBurnPRB.new();
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.burnPRB({from:firstAccount});
    assert.equal(await useBurnPRB.receivedPRBs.call(),0);
    assert.equal(await useBurnPRB.burntPRBs.call(),5);
  });

  it("Receives used Spectrum Tokens (e.g., PRBs) (50 Transfer / 5 SU) // 'Burns' (tranfers) received PRBs", async () =>{
    const useBurnPRB = await UseBurnPRB.new();
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.burnPRB({from:firstAccount});
    assert.equal(await useBurnPRB.receivedPRBs.call(),0);
    assert.equal(await useBurnPRB.burntPRBs.call(),50);
  });

  it("Receives used Spectrum Tokens (e.g., PRBs) (50 Transfer / 5 SU) // 'Burns' (tranfers) received PRBs", async () =>{
    const useBurnPRB = await UseBurnPRB.new();
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:secondAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:thirdAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fourhtAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:fifthAccount,value:1 });
    await useBurnPRB.usePRB(1,{from:sixthAccount,value:1 });
    await useBurnPRB.burnPRB({from:firstAccount});
    assert.equal(await useBurnPRB.receivedPRBs.call(),0);
    assert.equal(await useBurnPRB.burntPRBs.call(),100);
  });


});
