const handleSubmit = (event) => {
    event.preventDefault()

    // check what text was put into the form field
    let input = document.getElementById('name').value
    let output = document.getElementById('results');

    if(!Client.linkValidator(input)) {
        output.innerHTML = 'Invalid URL, This is not an article URL'
        return
    }

    console.log("::: Form Submitted :::")
    
    try {
        fetch(`http://localhost:8081/sentiment-analysis?url=${input}`)
        .then(res => res.json())
        .then(({agreement, subjectivity, confidence, irony}) => {
            output.innerHTML = `
            <p> agreement: ${agreement} </p>
            <p> subjectivity: ${subjectivity} </p>
            <p> confidence: ${confidence} </p>
            <p> irony: ${irony} </p>
            `
        })
    } catch(error) {
        console.log('sorry, can\'t get data from server', error)
    }
}

export { handleSubmit }
