   

                
    var randomChallengeBuffer = new Uint8Array(32);
//     window.crypto.getRandomValues(randomChallengeBuffer);

    var base64id = 'MIIBkzCCATigAwIBAjCCAZMwggE4oAMCAQIwggGTMII='
    var idBuffer = Uint8Array.from(window.atob(base64id), c=>c.charCodeAt(0))

    var publicKey = {
        challenge: randomChallengeBuffer,

        rp: { name: "protocol FIDO" },

        user: {
            id: idBuffer,
            name: "phone@example.com",
            displayName: "phone"
        },

        attestation: 'direct',
        pubKeyCredParams: [
            { type: 'public-key',  alg: -7  },
            { type: 'public-key', alg: -257 } 
        ]
    }
