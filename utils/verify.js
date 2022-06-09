const { run } = require("hardhat")

const verify = async (contractAddres, args) => {
    console.log("Verifying Contact --")
    try {
        await run("verify:verify", {
            address: contractAddres,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Contract already verified!")
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }
