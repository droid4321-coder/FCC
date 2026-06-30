//convert button attachment
const convertButton = document.getElementById("convert-button");

//get the webvtt content inside the textarea
const webvttText = document.querySelector("#webvtt-file");

//initial text variable
let text = "";

//initial cleaned text variable
let cleanedText = "";

//regex cleaning constants copied from AI lol :)
const WEBVTT_HEADER = /^WEBVTT\s*$/gm;
const TIMESTAMPS =
    /^\d{2}:\d{2}:\d{2}\.\d{3}\s*-->\s*\d{2}:\d{2}:\d{2}\.\d{3}.*$/gm;
const HTML_TAGS = /<\/?[^>]+>/g;
const EMPTY_LINES = /^\s*$/gm;

//make click function to get text and clean it
convertButton.addEventListener("click", () => {
;
    text = webvttText.value;
    //console.log("Text captured: " + text);
    cleanedText =  text
    .replace(WEBVTT_HEADER, "")
    .replace(TIMESTAMPS, "")
    .replace(HTML_TAGS, "")
    .replace(EMPTY_LINES, "")
    .trim();
    console.log("Cleaned Text:" + cleanedText)
})

/* const WEBVTT_HEADER = /^WEBVTT\s*$/gm;
const TIMESTAMPS =
    /^\d{2}:\d{2}:\d{2}\.\d{3}\s*-->\s*\d{2}:\d{2}:\d{2}\.\d{3}.*$/gm;
const HTML_TAGS = /<\/?[^>]+>/g;
const EMPTY_LINES = /^\s*$/gm;

text = text
    .replace(WEBVTT_HEADER, "")
    .replace(TIMESTAMPS, "")
    .replace(HTML_TAGS, "")
    .replace(EMPTY_LINES, "")
    .trim();
    */