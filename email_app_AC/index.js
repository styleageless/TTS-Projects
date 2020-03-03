var email = { 
    name: 'Gmail',
    mailboxes: [ 
        {name:"inbox", emails:[]},
        {name:"starred", emails:[]},
        {name:"sent", emails:[]},
        {name:"drafts", emails:[]},
        {name:"events", emails:[]}
    ], 

    emailPreview: [
        {name:'Jonathon', lastMessage: "Could you apply in-platform?",status:'sent'},
        {name:'Erika', lastMessage: "We're back in stock at Safeway",status:'draft'},
        {name: 'Jen', lastMessage: "Let's do lunch!",status:'draft' },

    ]
};
//Get a list of inbox names blah
for(let i =0; i < email.mailboxes.length; i++){
    console.log(email.mailboxes[i].name);
}


//Get a list of emails
for(let i=0; i < email.emailPreview.length; i++){
    console.log(email.emailPreview[i].lastMessage);
}
//Get the text of the second email in the visible list
console.log(email.emailPreview[1].lastMessage);

//Mark an email as sent 
for(let i=0; i<email.emailPreview.length; i++) {
    if(email.emailPreview[i].name='Erika'){
        email.emailPreview[i].status='sent'; 
    }
}

email.mailboxes[3].emails.push(email.emailPreview[2]);

console.log(email.mailboxes[3])


