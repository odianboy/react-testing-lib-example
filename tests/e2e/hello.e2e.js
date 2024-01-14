const { expect } = require('@wdio/globals')
const HelloPage = require('../pages/hello.page')

describe('My hello world page', () => {
    it('should login with valid credentials', async () => {
        await HelloPage.open()

        await HelloPage.toggleTitleWithInput('hello')
        await expect(HelloPage.helloTitle).toBeExisting()
        await HelloPage.toggleBtn.click()
        await expect(HelloPage.helloTitle).not.toBeExisting()

    })
        it('should not toggle', async () => {
            await HelloPage.open()

            await HelloPage.toggleTitleWithInput('fsfsdf')
            await expect(HelloPage.helloTitle).not.toBeExisting()

        })

}
)

