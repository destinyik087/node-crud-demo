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
 
async function createcourse() {
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
  // eq (equal)
  // ne (not equal)
  // gt (greater than)
  // gte (greater than or equal to)
  //  lt (less than)
  // lte (less than or equal to)
  // in
  // nin (not in)
  
    const courses = await Course
    // .find({ author: 'Destiny', isPublished: true })
    // .find({ price: { $gt: 10, $lte: 20 } })
    .find({ price: { $in }})
    .limit(10)
    .sort({  name: 1 })
    .select({ name:1, tags: 1 });
    console.log(courses);
} 
getcourses();