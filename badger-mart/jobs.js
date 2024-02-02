function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!

    // TODO: Alert the user of the job that they applied for!
    let jobTitle; // uninitialized to begin; enables use in conditional later

    // iterate over list of jobs
    let jobs = document.getElementsByName('job');
    for (let job of jobs) {
        // save the value of the checked option as jobTitle
        if (job.checked) {
            jobTitle = job.value;
        }
    }

    if (jobTitle) {
        alert("Thank you for applying to be a " + jobTitle + "!");    
    } else {
        alert("Please select a job!");
    }
    
}