# Pavel Didenko

## Junior Frontend Developer
![avatar]( https://raw.githubusercontent.com/Win4esterD/rsschool-cv/gh-pages/gr68xtzz4o4211.XwHMe.jpg )  

---
### Contact information:


**Phone:** +375445379839  
**E-mail:** win4ester2016@yandex.ru  
**LinkedIn:** [pavel-didenko-9b6371181](https://www.linkedin.com/in/pavel-didenko-9b6371181/ "LinkedIn")  
**GitHub:** [Win4esterD](https://github.com/Win4esterD "Win4esterD")
***  


## About me:  

**Birth date:** 13.09.1991  
**Country:** Belarus  
**City:** Borisov  

I'm a self learning programmer. In December 2020 I decided to switch my career and started my journey of studying programming.
Starting my work from scratch, I chose Python as my first programming language and learnt the basics of Python and the basics of OOP in Python. Mostly I used [Stepic](https://stepik.org/ "Stepic") platform for my education.   

In February 2022 I applied and got accepted to perform my internship as "Trainee Python Developer" in [iTechArt](https://www.itechart.by/ "iTechArt") company. Even though I didn't receive a job offer from the company, because my experience was not sufficient to accomplish all the tasks until the deadline, I had obtained some experience of working with Django framework, automated testing with Python by using PyTest for testing API of Django projects. Practiced database management using SQL and Django ORM.   

After the internship, I decided to gain more experience with HTML, CSS and Javascript. Since May until August I've learnt the basics of these technologies and gained experience of creating landing pages using Figma layouts. Links to my works you can find below in this CV. In August 2022 I've learnt about RS School Front-end developer training in September and took my chance to apply to it.  

I see it as an opportunity to finally reach my goal of obtaining a position of web developer in an IT company.

---

## Skills and Proficiency:  

* HTML
* CSS
* Javascript
* DOM
* Python
* Django
* Pytest
* Selenium
* Git
* GitHub
* SQL
* Photoshop
* Figma
* VS Code
* PyCharm
* Atom
* Linux
* Windows
* Adobe Muse
* Microsoft Word
* Microsoft Excel
* Microsoft Power Point
* English Language (B2 level)
* Spanish Language (B1 level)
* Russian Language (native)

---

## Code example:  

>Your task is to implement `GuessingGame` class
>#### Methods:
>##### `setRange(min, max)`
>this method accepts min and max value of range of number to guess
>##### `guess()`
>this method returns solution candidate (you make an assumption based on range and previous assumptions)
>##### `lower()`
>this method is called if prev call of `guess()` returned number which is greater than answer
>##### `greater()`
>this method is called if prev call of `guess()` returned number which is lower than answer
>Your implementation should use [binary search algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm) under the hood to pass all tests.

```
class GuessingGame {
    constructor() {}
  
    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.arr = [];
        for (let i = this.min; i <= this.max; i++){
          this.arr.push(i);
        }
    }
  
    guess() {
        return this.arr[Math.round((this.arr.length-1) / 2)];
    }
  
    lower() {
        this.max = this.guess();
        this.arr = [];
        for (let i = this.min; i <= this.max; i++){
          this.arr.push(i);
        }
    }
  
    greater() {
        this.min = this.guess();
        this.arr = [];
        for (let i = this.min; i <= this.max; i++){
          this.arr.push(i);
        }
    }
  }

module.exports = GuessingGame;
```
---

## My projects:

Project    | GitHub Link | Technologies  | Publishment link|
:---------:|:-----------:| :-----------: | :----------------:|
URL_Shortner |[Url_Shortner](https://github.com/Win4esterD/URL_Shortner "Url_Shortner")|Python, Django, HTML, CSS| [published](http://win4esterd.pythonanywhere.com/ "published")|
Travel LP |[Travel](https://github.com/Win4esterD/travel "Travel")|HTML, CSS, Javascript|[published](https://travel-ten-rust.vercel.app/ "published")|
PiperNet |[PiperNet](https://github.com/Win4esterD/PiperNet_landing_page "PiperNet")|HTML, CSS|[published](https://piper-net-landing-page.vercel.app/ "published")|
Quiz Game |[Quiz](https://github.com/Win4esterD/Quiz "Quiz")|Python|none|
Tarot |[Tarot](https://github.com/Win4esterD/Tarot "Tarot")|Python|none|
Magic Ball |[Magic Ball](https://github.com/Win4esterD/Magic-ball "Magic Ball")|Python|none|  


---

## Education: 

| Name of the educational institution  | Years of study | Specialization | Profession |
| :-----------------------------------|:--------------:| :-------------:| :--------: |
| [Belorussian State Economic University](http://bseu.by/ "University") | 2011 - 2017 | International Economy| Economist|
| [Borisov State College](https://bgk-borisov.by/ "University") | 2007 - 2010  | Mechanical Engineering| Operator / adjuster of machines with program control|
| [School №15 of Borisov city (Gymnasium No. 3)](https://gymn3.rooborisov.by/ "University") | 1998 - 2007 | Specialized learning of English language | none |



### Courses: 


| Course Name | Organization that provided the course | Course link   | Year of accomplishment| Certificate |
| :---------- |:-------------------------------------:|:-------------:|    :--------:         | :--------:  |
| Git Basics | ITDVN | [link](https://itvdn.com/ru/video/git-basics "Course link") | 2022 | [Yes](https://testprovider.com/ru/search-certificate/tp49678764 "Certificate")|
| Linux/GIT/Hosting | FructCode | [link](https://fructcode.com/ru/courses/linux-and-git/ "Course link") | 2022 | [Yes](https://fructcode.com/ru/certificates/b528576ba4984cd2ff09aa19b32203d3/en/ "Certificate")|
| Linux Introduction | Bioinformatics Institute | [link](https://stepik.org/course/73/syllabus "Course link") | 2022 | [Yes](https://stepik.org/cert/1352699 "Certificate")|
| Big Data and Data Science Introduction | Russian Programming School | [link](https://stepik.org/course/101687/syllabus "Course") | 2022 | [Yes](https://stepik.org/cert/1362793 "Certificate")|
| SQL Interactive Simulator | Far East Federal University | [link](https://stepik.org/course/63054/syllabus "Course") | 2022 | [Yes](https://stepik.org/cert/1387270 "Certificate")|
| HTML/CSS | FructCode | [link](https://fructcode.com/ru/courses/html-and-css/ "Course") | 2022 | [Yes](https://fructcode.com/ru/certificates/d2042bf217b8e38c36314cab3781f296/en/ "Certificate")|
| HTML/CSS Advanced | FructCode | [link](https://fructcode.com/ru/courses/html-and-css-advanced/ "Course") | 2022 | [Yes](https://fructcode.com/ru/certificates/f90f2472ea1fd9fb5bf34e708a69e787/en/ "Certificate")|
| Javascript/jQuery Introduction | FructCode | [link](https://fructcode.com/ru/courses/javascript-and-jquery/ "Course") | 2022 | [Yes](https://fructcode.com/ru/certificates/1791edeb17d6fb29920da042ad836d36/en/ "Certificate")|
| Python for Beginners | BEEGEEK School | [link](https://stepik.org/course/58852/syllabus "Course") | 2021 | [Yes](https://stepik.org/cert/933728 "Certificate")|
| Python for Beginners | Egoroff_channel | [link](https://stepik.org/course/63085/syllabus "Course") | 2021 | [Yes](https://stepik.org/cert/1009794 "Certificate")|
| Python OOP Basics | Egoroff_channel | [link](https://stepik.org/course/114354/promo?search=1244029534 "Course") | 2021 | No|
| HTML/CSS For Beginners | ITC-digital | [link](https://stepik.org/course/38218/syllabus "Course") | 2021 | [Yes](https://stepik.org/cert/1259305 "Certificate")|
| Automated Testing with Selenium and Python | Stepic | [link](https://stepik.org/course/575/syllabus "Course") | 2021 | [Yes](https://stepik.org/cert/1297087 "Certificate")|
| Python Starter | ITDVN | [link](https://itvdn.com/ru/news/article/new-course-python-starter "Course") | 2021 | [Yes](https://testprovider.com/ru/search-certificate/tp03752444 "Certificate")|
| Javascript for Beginners | Anton Kholin | [link](https://stepik.org/course/2223/syllabus "Course") | 2021 | [Yes](https://stepik.org/cert/1305102 "Certificate")|
| Spanish Language Course | Mc Graw Hill | [link](https://www.busuu.com/ "Course") | 2021 | [Yes](https://api.busuu.com/anon/certificates/40d91f01dc44716864c20509f3b072a5?utm_source=CRM&utm_group=ENG&utm_medium=CERTIFICATE_LEVEL&utm_campaign=CERTIFICATE_LEVEL "Certificate")|
| English Language Course | Mc Graw Hill | [link](https://www.busuu.com/ "Course") | 2020 | [Yes](https://api.busuu.com/anon/certificates/a9b9722fed83cdb65592feadb1d6d0c6?lang=ru "Certificate")|
| Business English Course | Mc Graw Hill | [link](https://www.busuu.com/ "Course") | 2020 | [Yes](https://api.busuu.com/anon/certificates/720887b3bcd3c7fd687f833783a3756f "Certificate")|


---

## Previous job Positions:

|Company Name  | Position | Start Date (month, year) | End Date (month, year) |
| :-----------------------------------|:--------------:| :-------------:| :--------: |
| [OAO BATE](https://www.oaobate.by/ "BATE") |  Operator of Program Controlled maschine   | Aug. 2010 | Aug. 2011|
| [OOO Design](https://deal.by/cs/2312 "Design") | Operator of Extrusion Machine  | Aug. 2011 | Jan. 2019|
| [ODO Jupiter](http://cran.by/ "Jupiter") | Marketing Specialist | Jan. 2019 | March. 2020 |
| [iTechArt](https://www.itechart.by/ "iTechArt") | Trainee Python (Full Stack) Developer | Feb. 2022 | April. 2022 |

---
## Languages:
  
* English Language (B2 level)  
* Spanish Language (B1 level)  
* Russian Language (native)  


### **Experience of using the English Language** 

Studied English at school with specialized learning of English. By the time of my graduation, I was capable of communicating with native speakers. Had experience of communication via internet and face to face with the citizens of the US. During my learning in the University, I obtained experience of conversation about topics related to the economy. In free time I used to communicate with foreign persons via internet, watched films and listened to the music in English.  

When I worked on position of "Marketing specialist", I used to perform conversations with foreign partners of the company I worked for, solved business tasks like ordering new spare parts or durable equipment, participated as an interpreter in business conversations between the management of my company and foreign partners. Translated from English to Russian technical documentations of the equipment, supplied by our partners, to increase sales of the products and obtain a bigger market share, and make it easier for our customers on the territory of the Customs Union, to get familiar with the products.

According to this [English test facility](https://examinator.epam.com/Main/PersonalAssignments/475976 "English test"), my level is B2.  I have strong conversation skill, capable of listening and understanding native speakers, can perform business conversations, read fiction and technical literature related to IT industry, especially programming.

During my journey of studying programming, English helped me a lot on several occasions. I used it to find necessary information in technical documentation of Django framework, to complete the task related with database management using Django ORM, also used English to find the way to create my proper HTTP protocol by using only Socket or SocketServer library (It was the task from my internship in iTechArt company, which I successfully accomplished.) Also I used English for reading the book "Ben Shaw - Web development with Django". These are not the only occasions when I used English, but these are most significant and memorable.

***
### **Experience of using Spanish Language**

Started learning Spanish in February 2019, because I came to the conclusion that knowledge of only one foreign language (English) wasn't impressive enough. During my journey of learning Spanish, I used such resources as the book "Full Course of Spanish Language by R. Gonsales and R. Alimova". Also, I used applications: Memrise, Busuu, SpanishDict to gain bigger vocabulary. Practiced Spanish by communicating with Spanish speaking people in the Discord app, developed my speaking and writing skills. Now I can spend hours speaking with the natives of Spanish and hope it would find its use in my career of Web Developer.
