chrome.storage.sync.get(['name', 'email', 'exp_ctc', 'current_ctc', 'yoe', 'moe'], (data) => {
    // Assume LinkedIn job application form fields have specific IDs or classes
    const nameField = document.querySelector('#name_field');  // Replace with actual selector
    const emailField = document.querySelector('#email_field');  // Replace with actual selector
    const ctcField = document.querySelector('#ctc_field');  // Replace with actual selector
    const experienceField = document.querySelector('#experience_field');  // Replace with actual selector
    const moeField = document.querySelector('#moe_field');  // Replace with actual selector
    
    if (nameField) nameField.value = data.name;
    if (emailField) emailField.value = data.email;
    if (ctcField) ctcField.value = `${data.current_ctc} / ${data.exp_ctc}`;
    if (experienceField) experienceField.value = data.yoe;
    if (moeField) moeField.value = data.moe;
  });
  