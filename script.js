document.getElementById('submitButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const messageElement = document.getElementById('message');
    
    if (name) {
      messageElement.textContent = `Olá, ${name}! Bem-vindo ao nosso site!`;
      messageElement.style.color = 'green';
    } else {
      messageElement.textContent = 'Por favor, digite seu nome!';
      messageElement.style.color = 'red';
    }
  }); 

  document.addEventListener('DOMContentLoaded',()=>{
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const contenDiv = document.getElementById('content');
        contentDiv.inner.html = '<p>${data.message}<p>'; 
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));
  });