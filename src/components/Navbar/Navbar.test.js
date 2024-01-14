import {Navbar} from "./Navbar";
import {fireEvent, render, screen} from "@testing-library/react";
import {renderWithRouter} from "../../tests/helpers/renderWithRouter";

describe('NAVBAR TESTS', () => {
    test('test about link', async () => {
        render(renderWithRouter(<Navbar />))
        const mainLink = screen.getByTestId('main-link')
        const aboutLink = screen.getByTestId('about-link')
        const usersLink = screen.getByTestId('users-link')

        fireEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
    })
    test('test main link', async () => {
        render(renderWithRouter(<Navbar/>))
        const mainLink = screen.getByTestId('main-link')

        fireEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })
    test('test users link', async () => {
        render(renderWithRouter(<Navbar />))
        const usersLink = screen.getByTestId('users-link')

        fireEvent.click(usersLink)
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    })
})