import readline from "readline";

/**
 * Prompts the user with a question and returns their input as a promise.
 *
 * This function creates a readline interface to ask a question via the terminal,
 * waits for the user's input, and then resolves the input when the user submits an answer.
 * The readline interface is closed after receiving the user's input.
 *
 * @param {string} question - The question to prompt the user with.
 * @returns {Promise<string>} - A promise that resolves with the user's input as a string.
 */
export const promptUser = (question) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
};
