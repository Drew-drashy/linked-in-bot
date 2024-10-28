document.getElementById('save').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const exp_ctc = document.getElementById('exp_ctc').value;
    const current_ctc = document.getElementById('current_ctc').value;
    const yoe = document.getElementById('yoe').value;
    const moe=document.getElementById('moe').value;
  
    // Store user details in Chrome storage
    chrome.storage.sync.set({
      name: name,
      email: email,
      exp_ctc: exp_ctc,
      current_ctc: current_ctc,
      yoe: yoe,
      moe:moe
    }, () => {
      alert('Details saved successfully!');
    });
  });
  