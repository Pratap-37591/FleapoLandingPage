// const testimonials = document.querySelectorAll(".testimonial");
// let currentTestimonial = 0;

// function showTestimonial(index) {
//     testimonials.forEach((testimonial, i) => {
//         if (i === index) {
//             testimonial.scrollIntoView({ behavior: "smooth" });
//         }
//     });
// }

// function scrollTestimonials(event) {
//     if (event.deltaY > 0) {
//         currentTestimonial++;
//         if (currentTestimonial >= testimonials.length) {
//             // currentTestimonial = 0;
//         }
//     } else {
//         currentTestimonial--;
//         if (currentTestimonial < 0) {
//             currentTestimonial = testimonials.length - 1;
//         }
//     }
//     showTestimonial(currentTestimonial);
// }

// window.addEventListener("wheel", scrollTestimonials);

// showTestimonial(currentTestimonial); // Show the initial testimonial
