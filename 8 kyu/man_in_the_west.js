/* A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false. */

// PREP
// Parameter: array of string
// Return: boolean
// Example: ['gold', 'stone'] ==> true

// Answer
function checkTheBucket(bucket) {
  return bucket.some((el) => el === "gold");
  // alternative way: bucket.includes('gold')
}

checkTheBucket(["stone", "stone", "stone", "stone", "stone"]);
