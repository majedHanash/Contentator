document.onload = handleOnLoad();

function handleUseCaseOnChange() {
    addElements();
    disableUndevelopedArabicUseCases();

}

function disableUndevelopedArabicUseCases() {
    var useCase = document.getElementById("useCase").value;

    enableArabic(true);
    switch (useCase) {
        case "Email":
            break;
        case "SMS":
            break;
        default:
            disableArabic(false);
            break;
    }
}

function disableArabic() {
    var language = document.getElementById("language");
    language.value = "English";

    enableArabic(false);
}

function enableArabic(enable) {
    document.getElementById("Arabic").disabled = !enable;
}

function addElements() {
    removeAllRemovables();
    var useCase = document.getElementById("useCase").value;

    switch (useCase) {
        case "Email":
            addEmailElement();
            break;
        case "SMS":
            addSMSElement();
            break;
        case "Song":
            addSongElement();
            break;
        case "Story":
            addStoryElement();
            break;
        case "Facebook":
            addFacebookElement();
            break;
        case "CoverLetter":
            addCoverLetterElements();
            break;
        case "VideoChannelDescription":
            addVideoChannelDescriptionElements();
            break;
        case "BlogIdea":
            addBlogIdeaElement();
            break;
        case "InterviewQuestions":
            addInterviewQuestionsElements();
            break;
        case "JobDescription":
            addJobDescriptionElement();
            break;
        case "Tagline":
            addTaglineElement();
            break;
        case "Testimonial":
            addTestimonialElements();
            break;
        case "QuestionAnswer":
            addQuestionAnswerElement();
            break;
        case "KeywordsGenerator":
            addKeywordsGeneratorElement();
            break;
        case "BusinessIdeas":
            addBusinessIdeasElements();
            break;
        case "PostIdea":
            addPostIdeaElement();
            break;
        case "SEOMetaTitle":
            addSEOMetaTitleElement();
            break;
        case "ProductDescription":
            addProductDescriptionElements();
            break;
    }

}

function removeAllRemovables() {
    var removable = document.getElementsByClassName("removable");
    while (removable.length != 0) {
        removable[0].parentNode.removeChild(removable[0])
    }
}

function addEmailElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextareaElement("Key points", "keyPoints", "keyPoints", 3);
    container.appendChild(row);
}

function addSMSElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextareaElement("Context", "context", "context");
    container.appendChild(row);
}

function addSongElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextareaElement("Song idea", "idea", "idea");
    container.appendChild(row);
}

function addStoryElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextareaElement("Story idea", "idea", "idea");
    container.appendChild(row);
}

function addFacebookElement() {
    var container = document.getElementById("filter-container");
    var row1 = addLabeledTextElement("Product name", "productName", "productName");

    var row2 = addLabeledTextareaElement("Product description", "productDescription", "productDescription");
    container.appendChild(row1);
    container.appendChild(row2);
}

function addCoverLetterElements() {
    var container = document.getElementById("filter-container");
    var row1 = addLabeledTextElement("Job Role", "jobRole", "jobRole");
    var row2 = addLabeledTextElement("Job Skills", "jobSkills", "jobSkills");

    container.appendChild(row1);
    container.appendChild(row2);
}

function addVideoChannelDescriptionElements() {
    var container = document.getElementById("filter-container");
    var row1 = addLabeledTextElement("Category", "category", "category");
    var row2 = addLabeledTextElement("Channel name", "name", "name");
    var row3 = addLabeledTextareaElement("What to cover", "cover", "cover");

    container.appendChild(row1);
    container.appendChild(row2);
    container.appendChild(row3);
}

function addBlogIdeaElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextElement("Primary keyword", "primaryKeyword", "primaryKeyword");
    container.appendChild(row);
}

function addInterviewQuestionsElements() {
    var container = document.getElementById("filter-container");
    var row1 = addLabeledTextareaElement("Interviewee bio", "intervieweeBio", "intervieweeBio", 3);
    var row2 = addLabeledTextareaElement("Interview context", "interviewContext", "interviewContext");
    container.appendChild(row1);
    container.appendChild(row2);
}

function addJobDescriptionElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextElement("Jobe role", "role", "role");
    container.appendChild(row);
}

function addTaglineElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextareaElement("Description", "description", "description", 3);
    container.appendChild(row);
}

function addTestimonialElements() {
    var container = document.getElementById("filter-container");
    var row1 = addLabeledTextElement("Name", "name", "name");
    var row2 = addLabeledTextareaElement("Review title", "reviewTitle", "reviewTitle");
    container.appendChild(row1);
    container.appendChild(row2);
}

function addQuestionAnswerElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextareaElement("Topic description", "description", "description", 4);
    container.appendChild(row);
}

function addKeywordsGeneratorElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextElement("Primary keyword", "primaryKeyword", "primaryKeyword");
    container.appendChild(row);
}

function addBusinessIdeasElements() {
    var container = document.getElementById("filter-container");
    var row1 = addLabeledTextElement("Interest", "interest", "interest");
    var row2 = addLabeledTextareaElement("Skills", "skills", "skills");
    container.appendChild(row1);
    container.appendChild(row2);
}

function addPostIdeaElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextareaElement("Topic", "topic", "topic");
    container.appendChild(row);
}

function addSEOMetaTitleElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextElement("Target keywords", "keywords", "keywords");
    container.appendChild(row);
}

function addProductDescriptionElements() {
    var container = document.getElementById("filter-container");
    var row1 = addLabeledTextElement("Product Name", "name", "name");
    var row2 = addLabeledTextareaElement("About product", "about", "about", 3);
    container.appendChild(row1);
    container.appendChild(row2);
}

function addLabeledTextElement(labelText, id, name) {
    var row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("removable");
    var formGroup = document.createElement("div")
    formGroup.classList.add("form-group");
    var label = document.createElement("label");
    label.innerHTML = labelText;
    var text = document.createElement("input");
    text.classList.add("form-control");
    text.type = "text";
    text.id = id;
    text.name = name;
    text.required = true;
    formGroup.appendChild(label);
    formGroup.appendChild(text);
    row.appendChild(formGroup);
    return row
}

function addLabeledTextareaElement(labelText, id, name, rows = 2) {
    var row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("removable");
    var formGroup = document.createElement("div")
    formGroup.classList.add("form-group");
    var label = document.createElement("label");
    label.innerHTML = labelText;
    var text = document.createElement("textarea");
    text.classList.add("form-control");
    text.rows = rows;
    text.id = id;
    text.name = name;
    text.required = true;
    formGroup.appendChild(label);
    formGroup.appendChild(text);
    row.appendChild(formGroup);
    return row;
}
