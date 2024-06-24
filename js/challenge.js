document.addEventListener('DOMContentLoaded', () => {
    let counter = document.getElementById('counter');
    let minusButton = document.getElementById('minus');
    let plusButton = document.getElementById('plus');
    let heartButton = document.getElementById('heart');
    let pauseButton = document.getElementById('pause');
    let likesList = document.querySelector('.likes');
    let commentForm = document.getElementById('comment-form');
    let commentList = document.getElementById('list');
    
    let count = 0;
    let timer = setInterval(incrementCounter, 1000);
    let isPaused = false;
    let likes = {};
  
    function incrementCounter() {
      count++;
      counter.innerText = count;
    }
  
    minusButton.addEventListener('click', () => {
      count--;
      counter.innerText = count;
    });
  
    plusButton.addEventListener('click', () => {
      count++;
      counter.innerText = count;
    });
  
    heartButton.addEventListener('click', () => {
      if (!likes[count]) {
        likes[count] = 1;
      } else {
        likes[count]++;
      }
      renderLikes();
    });
  
    function renderLikes() {
      likesList.innerHTML = '';
      for (let key in likes) {
        let li = document.createElement('li');
        li.innerText = `${key} has been liked ${likes[key]} time${likes[key] > 1 ? 's' : ''}`;
        likesList.appendChild(li);
      }
    }
  
    pauseButton.addEventListener('click', () => {
      if (!isPaused) {
        clearInterval(timer);
        pauseButton.innerText = 'resume';
        disableButtons(true);
      } else {
        timer = setInterval(incrementCounter, 1000);
        pauseButton.innerText = 'pause';
        disableButtons(false);
      }
      isPaused = !isPaused;
    });
  
    function disableButtons(disabled) {
      minusButton.disabled = disabled;
      plusButton.disabled = disabled;
      heartButton.disabled = disabled;
    }
  
    commentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      let commentInput = document.getElementById('comment-input');
      let comment = commentInput.value;
      let p = document.createElement('p');
      p.innerText = comment;
      commentList.appendChild(p);
      commentInput.value = '';
    });
  });
  