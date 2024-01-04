// Mobile menu Open/Close
burger = document.querySelector(".burger");
navbar = document.querySelector(".nav-bar");

burger.addEventListener("click", () => {
  navbar.classList.toggle("active-drop");
});



// about dropdown open/close
dropdown = document.querySelector(".about-row-3");
btnselect = document.querySelector(".about-row-btn .cta");
btnselect.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("abt-hidden");
});

// Experience section toggle 
const section2 = document.getElementById('experience')
section2.addEventListener('click', function (e) {
  const target = e.target;
  console.log(e)
  if (target.closest('.timeline')) {
    target.closest('.exp-more-information').classList.add('active');
  }
  if (target.closest('.more-experience')) {
    target.closest('.exp-more-information').classList.remove('active');
  }
})

// lp popup on form submit
function closelp(closeBar, event){
  event.preventDefault();
  
  const closelps = document.getElementById('close-lp');
  const closeblock = document.getElementById('lp-pop');
  
  closelps.style.display = closeBar;
  closeblock.style.display = closeBar;
}


// email required field

document.getElementById('email').addEventListener('input', function () {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const submitBtn = document.getElementById('submit-btn');
  const erroricon = document.getElementById('fa-triangle-exclamation');
  const greencheck = document.getElementById('fa-circle-check');
  
// Regular expression for a basic email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(emailInput.value)) {
      // Email is not valid
      emailError.style.display = 'inline';
      submitBtn.disabled = true;
      emailInput.style.outline = '3px solid #e80000';
      emailInput.style.outlineOffset = '-3px';
      erroricon.style.display = 'block';
      greencheck.style.display = 'none';
  } else {
      // Email is valid
      emailError.style.display = 'none';
      submitBtn.disabled = false;
      emailInput.style.outline = '';
      erroricon.style.display = 'none';
      greencheck.style.display = 'block';
  }
});






























// Practice Codes

// Experience Section toggle
// const timelineItems = document.querySelectorAll('.timeline-item');
// const moreInfo = document.querySelectorAll(".exp-more-information");
// console.log(moreInfo);
// timelineItems.forEach((item, index) => {
//     item.addEventListener('click', () => {
//         const currentMoreInfo = moreInfo[index];
//         const isActive = currentMoreInfo.classList.contains("active");
//         // console.log(item, index);

//         moreInfo.forEach((info, i, g) => {
//           console.log(info, i, g);
//             if (i !== index) {
//                 info.classList.remove('active');
//             }
//         });

//         currentMoreInfo.classList.toggle("active", !isActive);

//     });
// });




// function handleTimelineItemClick(index) {
//   console.log(index)

//   const currentMoreInfo = moreInfo[index];
//   const isActive = currentMoreInfo.classList.contains("active");

//   moreInfo.forEach((info, i) => {
//       if (i !== index) {
//           info.classList.remove('active');
//       }
//   });

//   currentMoreInfo.classList.toggle("active", !isActive);
// }

// timelineItems.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     console.log(item,index)
//       handleTimelineItemClick(index);
//   });
// });




// const moreInformation = document.querySelectorAll('.more-info');
// const moreExperienceButton = document.querySelectorAll('.more-experience');


// moreExperienceButton.addEventListener('click', () => {
//     // Toggle the "active" class for more-information
//     // moreInformation.classList.remove('show');
// });






// const moreinformation = document.querySelector('.more-info');
// const moreExperienceButton = document.querySelector('.more-experience');

// moreExperienceButton.addEventListener('click', () => {

//   });

// timelineItems.forEach((item, index) => {
//     item.addEventListener('click', () => {
//         // Toggle the active state of the clicked more-info element
//         moreInfo.forEach((info, i) => {
//             if (i === index) {
//                 info.classList.toggle('active');
//             } else {
//                 info.classList.remove('active');
//             }
//         });

//         // Toggle the visibility of the toggle button based on the active state of more-info
//         toggleButton.style.display = moreInfo[index].classList.contains('active') ? 'block' : 'none';

//         // Toggle the visibility of the more-experience button in exp-row-1
//         moreExperienceButton.style.display = moreInfo[index].classList.contains('active') ? 'block' : 'none';
//     });
// });

// // Add click event listener to the more-experience button
// moreExperienceButton.addEventListener('click', () => {
//     // Find the index of the active exp-more-information
//     const activeIndex = Array.from(moreInfo).findIndex(info => info.classList.contains('active'));

//     // Toggle the "active" class for the corresponding exp-more-information
//     if (activeIndex !== -1) {
//         moreInfo[activeIndex].classList.toggle('active');
//     }
// });

