/*
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

Input coordinates fit in range
−
50
⩽
x
,
y
⩽
50
−50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6.
*/

// Answer
#include <cmath>

double distance_between_two_points(const Point &a, const Point &b)
{
    return sqrt(pow(b.y - a.y, 2) + pow(b.x - a.x, 2));
}