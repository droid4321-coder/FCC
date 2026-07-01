//convert button attachment
const convertButton = document.getElementById("convert-button");

//get the webvtt content inside the textarea
const webvttText = document.querySelector("#webvtt-file");

//result textarea
const cleanedWebvtt = document.querySelector("#cleaned-file")

//clear left field button
const clearWebvtt = document.querySelector("#clear-webvtt");

//clear right field button
const clearCleaned= document.querySelector("#clear-cleaned");

//initial text variable
let text = "";

//initial cleaned text variable
let cleanedText = "";

//regex cleaning constants copied from AI lol :)
const WEBVTT_HEADER = /^WEBVTT.*$/gm;
const TIMESTAMPS = /^\d{2}:\d{2}:\d{2}\.\d{3}\s*-->\s*\d{2}:\d{2}:\d{2}\.\d{3}.*$/gm;
const CUE_NUMBERS = /^\d+$/gm;
const NOTES = /^NOTE.*$/gm;
const HTML_TAGS = /<\/?[^>]+>/g;
const SPEAKER_ARROWS = /^>>\s*/gm;
const MULTIPLE_SPACES = /[ \t]{2,}/g;
const EMPTY_LINES = /^\s*$/gm;

//make click function to get text and clean it
convertButton.addEventListener("click", () => {
;
    text = webvttText.value;
    //console.log("Text captured: " + text);
    cleanedText =  text
    .replace(WEBVTT_HEADER, "")
    .replace(TIMESTAMPS, "")
    .replace(CUE_NUMBERS, "")
    .replace(NOTES, "")
    .replace(HTML_TAGS, "")
    .replace(SPEAKER_ARROWS, "")
    .replace(MULTIPLE_SPACES, "")
    .replace(EMPTY_LINES, "")
    .trim();
    console.log("Cleaned Text:" + cleanedText)
    cleanedWebvtt.value = cleanedText;
})

clearWebvtt.addEventListener("click", () => webvttText.value = "")
clearCleaned.addEventListener("click", () => cleanedWebvtt.value = "")