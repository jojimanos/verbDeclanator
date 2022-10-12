import determineVoice from "../determineVoice"
import presentOutput from "./output"
import formThePresent from "./formThePresent"
import errorMessage from "./errorMessage"
import formThePresentSubjunctive from "./formThePresentSubjunctive"
import formThePresentOptative from "./formThePresentOptative"
import formThePresentImperative from "./formThePresentImperative"

const presentDeclension = (verb, active, passive, indicative, subjunctive, optative, imperative) => {

    let error = "No mood checked"

    if (indicative) {

        let voice = determineVoice(active, passive)

        let form = formThePresent(verb)

        return (presentOutput(voice, form))
    } 
    else if (subjunctive) {

        let voice = determineVoice(active, passive)

        let form = formThePresentSubjunctive(verb)

        return (presentOutput(voice, form))

    }
    else if (optative) {

        let voice = determineVoice(active, passive)

        let form = formThePresentOptative(verb)

        return (presentOutput(voice, form))

    }
    else if (imperative) {

        let voice = determineVoice(active, passive)

        let form = formThePresentImperative(verb)

        return (presentOutput(voice, form))

    }
    else {
        return errorMessage(error)
    }
}
export default presentDeclension
