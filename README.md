# Triangle Tracker
#### This is a project on triangle tracker website, 301st may 2019
#### By **Francis kimari**
## Description
The traiangle tracker project prompts user to input all the three dimensions of their choice and the website determines the type of triangle through an inbuilt business logic in its js file, thereby alerting user on type of the triangle.
## Setup/Installation Requirements
Use the following commands to start using this program :

* `git clone https://github.com/franciskimari/triangle-tracker.git`
* `cd triangle-tracker`
* `atom .`
##Behavior Driven Development
* Below The program should return this when the input is not a number:
** User inputs
**Input Example**: a

**Output Example**: not triangle

* The program should return this when the input is a negative value:

**Input Example**: -1

**Output Example**: not triangle

* The program should return this when the sum of any two sides is less than or equal to the third side:

**User Input Example**: first side = 1, second side = 1, third side = 3

**Output Example**: not triangle

* The program should return this when all sides are equal:

**Input Example**: first side = 4, second side = 4, third side = 4

**Output Example**: equilateral triangle

* The program should return this when at most two sides are equal:

**Input Example**: first side = 4, second side = 4, third side = 5

**Output Example**:isosceles triangle

* The program should return this when all sides are not equal:

**Input Example**: first side = 4, second side = 5, third side = 6

**Output Example**: scalene triangle


### License
MIT License

Copyright (c) 2019 Moringa School

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.