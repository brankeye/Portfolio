import { IStory } from '../shared/story/story';
import { Injectable } from '@angular/core';
import { IProject } from '../project/project';

@Injectable()
export class DataService {
  getProject(projectId: number) {
    return this.getProjects().find((project: IProject) => project.id === projectId);
  }

  getProjects(): IProject[] {
    const list: IProject[] = [
      {
        'id': 1,
        'title': 'Portfolio Website',
        'startDate': 'March 2017',
        'endDate': 'present',
        'description': 'This very website!',
        'shortDescription': 'This very website!',
        'details': [
          'Hosted on Amazon Web Services (AWS) with a Node.js server.',
          'Frontend created with Angular JS 2 and some nifty HTML5 and CSS3.',
          'Arranged each page into a separate module so that they are responsible for their own routing and content.',
          'Created a shared module that contains components needed by the page-level modules.'
        ],
        'technologies': [
          'AngularJS 2',
          'Node.js'
        ],
        'languages': [
          'TypeScript, HTML5, CSS'
        ]
      },
      {
        'id': 2,
        'title': 'Rassler',
        'startDate': 'Jan 2017',
        'endDate': 'present',
        'description': 'A martial arts school manager (improved version of cm.project).',
        'shortDescription': 'A martial arts school manager.',
        'details': [
          'The API is asynchronous, including the Entity Framework repository.',
          'The API is secured by ASP.NET Individual Accounts to handle user authentication.',
          'User authorization is handled by a generic secured repository that queries for only ' +
          'the records that belong to the currently authenticated user.'
        ],
        'technologies': [
          'Xamarin.Forms',
          'Xamarin.Realm',
          'ASP.Net Web API',
          'Entity Framework'
        ],
        'languages': [
          'C#',
          'XAML'
        ]
      },
      {
        'id': 3,
        'title': 'Atlas.Forms',
        'startDate': 'Dec 2016',
        'endDate': 'Feb 2017',
        'description': 'Atlas is a library for Xamarin.Forms that provides viewmodel-first navigation, ' +
        'event-based automatic page-caching, navigation-stack saving, and some other useful services.',
        'shortDescription': 'A navigation library for Xamarin.Forms.',
        'details': [
          'Achieved a highly flexible and modular design through the use of dependency injection' +
          ' and an abstract class pattern with overridable methods for increased extensibility',
          'Aimed to minimize the use of static classes and the singleton pattern by instead relying ' +
          'on dependency injection and a service factory when service-injection was required.',
          'Designed classes and components with the Single Responsibility Principle in mind.'
        ],
        'technologies': [
          'Xamarin.Forms',
          'NUnit'
        ],
        'languages': [
          'C#'
        ]
      },
      {
        'id': 4,
        'title': 'Xamarin.Realm.Service (XRS)',
        'startDate': 'Jan 2017',
        'endDate': 'Feb 2017',
        'description': 'A service layer for Xamarin.Realm database that provides thread-safe auto-incrementing ' +
        'primary key support, data-changing events, and an extensible API for working with RealmObjects.',
        'shortDescription': 'A service layer for Xamarin.Realm.',
        'details': [
          'Service layer pattern with overridable methods gives finer control to operations on ' +
          'specific data models.',
          'Auto-increment capabilities are enabled through an attribute applied to any primary key ' +
          'of integral type.',
          'Made sure services were garbage collected properly using WeakReference testing.',
          'Used a combination of reflection and an event aggregation service to ensure crossthread ' +
          'event raising (an event raised on one service-thread is raised on all threads).'
        ],
        'technologies': [
          'Xamarin.Realm',
          'NUnit'
        ],
        'languages': [
          'C#'
        ]
      },
      {
        'id': 5,
        'title': 'INPCE',
        'startDate': '',
        'endDate': '2016',
        'description': 'Provides extension methods for the INotifyPropertyChanged interface (C#) to help raise the ' +
        'PropertyChanged event and reduce boilerplate code.',
        'shortDescription': 'Extension methods for INotifyPropertyChanged.',
        'details': [
          'Wanted to learn how to publish Nuget packages for code I was using in multiple ' +
          'different projects for Xamarin.Forms mobile development. Used this project for that purpose.'
        ],
        'technologies': [],
        'languages': [
          'C#'
        ]
      },
      {
        'id': 6,
        'title': 'Honours Project',
        'startDate': '',
        'endDate': '2016',
        'description': 'A martial arts school manager designed for COMP 4905.',
        'shortDescription': 'A martial arts school manager.',
        'details': [
          'Published the API to an AWS EC2 instance and the database to an AWS RDS instance.',
          'The API is secured by ASP.NET Individual Accounts to handle user authentication.',
          'Implemented client-side online/offline synchronization using a custom service that ' +
          'synchronized remote primary keys with local primary keys.'
        ],
        'technologies': [
          'Xamarin.Forms',
          'Xamarin.Realm',
          'ASP.Net Web API',
          'Entity Framework',
          'Amazon Web Services (AWS)'
        ],
        'languages': [
          'C#',
          'XAML'
        ]
      },
      {
        'id': 7,
        'title': '3D Space Fighter',
        'startDate': '',
        'endDate': '2014',
        'description': 'A space-fighter designed for the COMP 3501 term project with a team of three.',
        'shortDescription': 'A 3D space fighter.',
        'details': [
          'Responsible for user input controls and quaternion camera controls.',
          'Responsible for hierarchical transformations.',
          'Implemented ship weapons systems.'
        ],
        'technologies': [
          'DirectX 11'
        ],
        'languages': [
          'C++'
        ]
      },
      {
        'id': 8,
        'title': 'cuTPS',
        'startDate': '',
        'endDate': '2014',
        'description': 'Carleton University Textbook Publishing System: ' +
        'a textbook publishing app designed for the COMP 3004 term project with a team of four.',
        'shortDescription': 'A textbook publishing system.',
        'details': [
          'Responsible for networking and data serialization.',
          'Implemented some UI controls.'
        ],
        'technologies': [
          'Qt'
        ],
        'languages': [
          'C++'
        ]
      }
    ];
    return list;
  }

  getWork(): IStory {
    const work: IStory = {
      'id': 1,
      'title': 'Minto Group Inc.',
      'startDate': 'May',
      'endDate': 'Sep 2016',
      'description': 'Junior Software Developer with a focus on Xamarin.Forms mobile development.',
      'details': [
        'Semi-Agile Scrum development process for Android applications.',
        'Worked and performed exceptionally on a project with a co-worker that required ' +
        'significant focus as hard deadlines were to be met in sprints.',
        'Appealing UI design that encourages ease-of-use and best use of screen space.',
        'Designed client-side online/offline synchronization C# service for mobile application.'
      ]
    };
    return work;
  }

  getEducation(): IStory {
    const education: IStory = {
      'id': 2,
      'title': 'Carleton University, Ottawa, ON',
      'startDate': 'Sep 2012',
      'endDate': 'Dec 2016',
      'description': 'Bachelor of Computer Science with Honours in Software Engineering.',
      'details': [
        'Initially three years in the Game Development stream.',
        'Then two years accelerated in the Software Engineering stream.'
      ]
    };
    return education;
  }

  getSkills(): string[] {
    const skills: string[] = [
      'C#',
      'Xamarin.Forms',
      'XAML',
      'Xamarin.Realm',
      'SQLite.NET',
      'ASP.Net Web API',
      'Entity Framework',
      'JavaScript',
      'TypeScript',
      'Angular JS 2',
      'HTML5',
      'CSS3',
      'C',
      'C++',
      'Java',
      'Node.js',
      'Amazon Web Services (AWS)',
      'Microsoft Azure'
    ];
    return skills;
  }
}

/*
 id: number;
 title: string;
 startDate: Date;
 endDate: Date;
 description: string;
 details: string[];
 */
