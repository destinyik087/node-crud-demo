const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/playground', {
    
})
 .then(() => console.log('connected to mongoDB...'))
 .catch(err => console.error('could not connect to mongoDB...', err))

 const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now},
    isPublished: Boolean
 });

const Course = mongoose.model('Course', courseSchema)
 
async function createCourse() {
 const course = new Course({
    name: 'Angular Course',
    author: 'Destiny',
    tags: ['angular', 'frontend'],
    isPublished: true
});

const result = await course.save();
console.log(result, "Consoling");
}




async function getcourses() {
    const pageNumber = 2;
    const pageSize = 10;

    const courses = await Course
    .find({ author: 'Destiny' , isPublished: true })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({  name: 1 })
    .count();
    console.log(courses);
} 


createCourse()

getcourses();