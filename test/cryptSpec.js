describe("Crypt test", function () {

    var passphrase = 'fcf8afd67e96fa3366dd8eafec8bcace';
    var crypter = Crypt(passphrase);

    it('decrypted crypted data should be the same than original data', function () {
        var originalData, encryptedData, dencryptedData;

        originalData = {"hello": "world"};
        console.log("Original data:", originalData);
        encryptedData = crypter.encrypt(originalData);
        console.log("Encrypted data:", encryptedData);
        dencryptedData = crypter.decrypt(encryptedData);
        console.log("Dencrypted data:", dencryptedData);

        expect(dencryptedData).toEqual(originalData);
    });
});