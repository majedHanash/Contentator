document.onload = handleOnLoad();

function handleUseCase() {
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
        case "Story":
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
    var row = addLabeledTextareaElement("Key points", "keyPoints", "keyPoints",
        "Hello manager\nI need a week off to travel home\nI have to attend my friend's wedding", 3);
    container.appendChild(row);
}

function addSMSElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextareaElement("Context", "context", "context",
        "Don't forget the meeting today");
    container.appendChild(row);
}

function addSongElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextareaElement("Song idea", "idea", "idea",
        "A couple in love in Paris");
    container.appendChild(row);
}

function addStoryElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextareaElement("Story idea", "idea", "idea",
        "Five kids lost in the jungle");
    container.appendChild(row);
}

function addFacebookElement() {
    var container = document.getElementById("filter-container");
    var row1 = addLabeledTextElement("Product name", "productName", "productName",
        "Lee");

    var row2 = addLabeledTextareaElement("Product description", "productDescription", "productDescription",
        "Best chocolate in middle east");
    container.appendChild(row1);
    container.appendChild(row2);
}

function addCoverLetterElements() {
    var container = document.getElementById("filter-container");
    var row1 = addLabeledTextElement("Job Role", "jobRole", "jobRole",
        "AI developer");
    var row2 = addLabeledTextElement("Job Skills", "jobSkills", "jobSkills",
        "python, data science, sql");

    container.appendChild(row1);
    container.appendChild(row2);
}

function addVideoChannelDescriptionElements() {
    var container = document.getElementById("filter-container");
    var row1 = addLabeledTextElement("Category", "category", "category",
        "Education");
    var row2 = addLabeledTextElement("Channel name", "name", "name",
        "Statictac");
    var row3 = addLabeledTextareaElement("What to cover", "cover", "cover",
        "Teaching statistics and AI");

    container.appendChild(row1);
    container.appendChild(row2);
    container.appendChild(row3);
}

function addBlogIdeaElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextElement("Primary keyword", "primaryKeyword", "primaryKeyword",
        "Farming in future");
    container.appendChild(row);
}

function addInterviewQuestionsElements() {
    var container = document.getElementById("filter-container");
    var row1 = addLabeledTextareaElement("Interviewee bio", "intervieweeBio", "intervieweeBio",
        "Regina Phalange is a data scientist with 3 years experience", 3);
    var row2 = addLabeledTextareaElement("Interview context", "interviewContext", "interviewContext",
        "Interviewing a candidate for a role of data engineering");
    container.appendChild(row1);
    container.appendChild(row2);
}

function addJobDescriptionElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextElement("Jobe role", "role", "role",
        "Marketing manager");
    container.appendChild(row);
}

function addTaglineElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextareaElement("Description", "description", "description",
        "Sham is a Syrian restaurant located in Dubai. It has all kind of delicious Syrian food and salads. Peaceful restaurant with a great view", 3);
    container.appendChild(row);
}

function addTestimonialElements() {
    var container = document.getElementById("filter-container");
    var row1 = addLabeledTextElement("Name", "name", "name",
        "Asatana");
    var row2 = addLabeledTextareaElement("Review title", "reviewTitle", "reviewTitle",
        "Best hotel in Abu Dhabi with Turkish style");
    container.appendChild(row1);
    container.appendChild(row2);
}

function addQuestionAnswerElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextareaElement("Topic description", "description", "description",
        "Real Madrid further enhanced their legendary status in world football by clinching their 14th European Cup in 2022. The Whites added to their silverware list in the competition when they defeated Liverpool in Paris. The club had previously secured its first trophies of the decade when it won its 12th Spanish Super Cup against Athletic in Riad.", 4);
    container.appendChild(row);
}

function addKeywordsGeneratorElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextElement("Primary keyword", "primaryKeyword", "primaryKeyword",
        "Gaming channel");
    container.appendChild(row);
}

function addBusinessIdeasElements() {
    var container = document.getElementById("filter-container");
    var row1 = addLabeledTextElement("Interest", "interest", "interest",
        "Organic food");
    var row2 = addLabeledTextareaElement("Skills", "skills", "skills",
        "AI, Software engineering");
    container.appendChild(row1);
    container.appendChild(row2);
}

function addPostIdeaElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextareaElement("Topic", "topic", "topic",
        "Inspiring community members to share their voices and ideas openly");
    container.appendChild(row);
}

function addSEOMetaTitleElement() {
    var container = document.getElementById("filter-container");
    var row = addLabeledTextElement("Target keywords", "keywords", "keywords",
        "AI writing assistant, content generator");
    container.appendChild(row);
}

function addProductDescriptionElements() {
    var container = document.getElementById("filter-container");
    var row1 = addLabeledTextElement("Product Name", "name", "name",
        "Bee Order");
    var row2 = addLabeledTextareaElement("About product", "about", "about",
        "Fastest food delivery application in Syria", 3);
    container.appendChild(row1);
    container.appendChild(row2);
}


function addLabeledTextElement(labelText, id, name, placeholder) {
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
    text.placeholder = placeholder
    formGroup.appendChild(label);
    formGroup.appendChild(text);
    row.appendChild(formGroup);
    return row
}

function addLabeledTextareaElement(labelText, id, name, placeholder, rows = 2) {
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
    text.placeholder = placeholder;
    formGroup.appendChild(label);
    formGroup.appendChild(text);
    row.appendChild(formGroup);
    return row;
}

function unescape(string) {
    return new DOMParser().parseFromString(string, 'text/html').querySelector('html').textContent;
}