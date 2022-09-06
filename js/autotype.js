let auto = new AutoTyping({
	id: 'brand',
	typeText: ['AutoTyping'],
	textColor: '',
	typeSpeed: 200,
	typeRandom: true,
	typeDelay: 300,
	cursor: '',
	deleteSpeed: 100,
	deleteDelay: 2500,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 4,
		continueThis : 'Typing'
	  }
	}
  }).init();
  
  new AutoTyping({
	id: 'mit',
	typeText: ['MIT License'],
	textColor: '',
	typeSpeed: 50,
	typeRandom: false,
	typeDelay: 300,
	cursorColor: '',
	cursorSpeed: 500,
	deleteSpeed: 100,
	deleteDelay: 2000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'header',
	typeText: ['Auto Typing','Best Typing Write library','Very easy to use','Lots of customization options','Try and use completely free'],
	textColor: '#000',
	typeSpeed: 50,
	typeRandom: true,
	typeDelay: 200,
	cursor: '',
	cursorColor: '',
	cursorSpeed: 200,
	deleteSpeed: 50,
	deleteDelay: 2000,
	typeInfinity: true,
	callBack: {
	  counter: 4,
	  method: function(counter){
		switch(counter) {
		  case 0:
			$('header').removeClass('header-animate1');
			$('header').addClass('header-animate0');
			break;
		  case 1:
			$('header').removeClass('header-animate2');
			$('header').addClass('header-animate1');
			break;
		  case 2:
			$('header').removeClass('header-animate3');
			$('header').addClass('header-animate2');
			break;
		  case 3:
			$('header').removeClass('header-animate4');
			$('header').addClass('header-animate3');
			break;
		  case 4:
			$('header').removeClass('header-animate0');
			$('header').addClass('header-animate4');
			break;
		}
	  }
	},
	textDeleteOptions : {
	  1 : {
		deleteToChar : 5,
		continueThis : 'for You'
	  },
	  2 : {
		deleteToChar : 5,
		continueThis : 'smart'
	  }
	}
  }).init();

  new AutoTyping({
	id: 'header-description',
	typeText: ['This is a JavaScript library that allows you to easily and quickly implement a type writer effect on your website or application.'],
	textColor: '#000',
	typeSpeed: 30,
	typeRandom: false,
	typeDelay: 200,
	cursor: '|',
	cursorSpeed: 200,
	deleteSpeed: 10,
	deleteDelay: 3500,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'about',
	typeText: ['What is AutoTyping'],
	textColor: '#ffc107',
	typeSpeed: 50,
	typeRandom: true,
	typeDelay: 200,
	cursor: '?',
	cursorColor: '#28a745',
	cursorSpeed: 200,
	deleteSpeed: 50,
	deleteDelay: 2000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 5,
		continueThis : ' is it for'
	  }
	}
  }).init();
  
  new AutoTyping({
	id: 'releases',
	typeText: ['Releases'],
	textColor: '#007bff',
	cursor: '_'
  }).init();

  new AutoTyping({
	id: 'instalation',
	typeText: ['Instalation'],
	textColor: '#e83e8c',
	cursor: '<i class="fas fa-bolt" style="font-size: .8em;"></i>',
	cursorColor: '#17a2b8',
	textDeleteOptions : {
	  0 : {
		deleteToChar : 6,
		continueThis : 'lation'
	  }
	}
  }).init();

  new AutoTyping({
	id: 'setup',
	typeText: ['Setup'],
	textColor: '#28a745',
	cursor: '<i class="fas fa-wrench" style="font-size: .8em;"></i>',
	cursorColor: '#6c757d'
  }).init();

  new AutoTyping({
	id: 'options',
	typeText: ['Options'],
	textColor: '#6885e3',
	cursor: '<i class="fas fa-filter" style="font-size: .7em;"></i>',
	cursorColor: '#fc0000'
  }).init();

  new AutoTyping({
	id: 'methods',
	typeText: ['Methods'],
	typeSpeed: 110,
	textColor: '#6885e3',
	cursor: '<i class="fas fa-filter" style="font-size: .7em;"></i>',
	cursorColor: '#fc0000'
  }).init();

  new AutoTyping({
	id: 'example',
	typeText: ['Example'],
	textColor: '#ff5500',
	typeSpeed: 50,
	typeDelay: 200,
	cursor: '<i class="fas fa-arrow-down" style="font-size: .7em;"></i>',
	cursorSpeed: 200,
	deleteSpeed: 50,
	deleteDelay: 2000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para1',
	typeText: ['Best type writer library'],
	textColor: '#1A1D45',
	typeSpeed: 50,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para2',
	typeText: ['Best type writer library'],
	textColor: '#ED1F17',
	typeSpeed: 100,
	typeRandom: false,
	typeDelay: 300,
	cursorSpeed: 300,
	deleteSpeed: 100,
	deleteDelay: 2000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para3',
	typeText: ['Best type writer library'],
	textColor: '#F4BC2B',
	typeSpeed: 100,
	typeRandom: false,
	typeDelay: 100,
	cursorSpeed: 150,
	deleteSpeed: 50,
	deleteDelay: 1500,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para4',
	typeText: ['Best type writer library'],
	textColor: '#B0B0EB',
	typeSpeed: 70,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para5',
	typeText: ['Best type writer library'],
	textColor: '#F23D7F',
	typeSpeed: 150,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para6',
	typeText: ['Best type writer library'],
	textColor: '#0ABF04',
	typeSpeed: 90,
	typeRandom: false,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 2000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para7',
	typeText: ['Best type writer library'],
	textColor: '#A67D03',
	typeSpeed: 50,
	typeRandom: false,
	typeDelay: 400,
	cursorSpeed: 500,
	deleteSpeed: 150,
	deleteDelay: 2000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para8',
	typeText: ['Best type writer library'],
	textColor: '#F24535',
	typeSpeed: 150,
	typeRandom: false,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 100,
	deleteDelay: 1000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para9',
	typeText: ['Best type writer library'],
	textColor: '#0D0D0D',
	typeSpeed: 50,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 50,
	deleteDelay: 1000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para10',
	typeText: ['Best type writer library'],
	textColor: '#F62BCC',
	typeSpeed: 150,
	typeRandom: false,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 10,
	deleteDelay: 1000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para11',
	typeText: ['Best type writer library'],
	textColor: '#3A758C',
	typeSpeed: 30,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para12',
	typeText: ['Best type writer library'],
	textColor: '#62CDD9',
	typeSpeed: 250,
	typeRandom: false,
	typeDelay: 250,
	cursorSpeed: 250,
	deleteSpeed: 250,
	deleteDelay: 2500,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para13',
	typeText: ['Best type writer library'],
	textColor: '#F2D022',
	typeSpeed: 50,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para14',
	typeText: ['Best type writer library'],
	textColor: '#F29E38',
	typeSpeed: 90,
	typeRandom: true,
	typeDelay: 100,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para15',
	typeText: ['Best type writer library'],
	textColor: '#043540',
	typeSpeed: 50,
	typeRandom: true,
	typeDelay: 1000,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para16',
	typeText: ['Best type writer library'],
	textColor: '#05AFF2',
	typeSpeed: 50,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 100,
	deleteSpeed: 160,
	deleteDelay: 1800,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para17',
	typeText: ['Best type writer library'],
	textColor: '#F2E307'
  }).init();

  new AutoTyping({
	id: 'para18',
	typeText: ['Best type writer library'],
	textColor: '#D9C091',
	typeSpeed: 100,
	typeRandom: false,
	typeDelay: 100,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 2000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para19',
	typeText: ['Best type writer library'],
	textColor: '#A0A603',
	typeSpeed: 95,
	typeRandom: true,
	typeDelay: 80,
	cursorSpeed: 400,
	deleteSpeed: 50,
	deleteDelay: 1000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para20',
	typeText: ['Best type writer library'],
	textColor: '#BF6B04',
	typeSpeed: 50,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para21',
	typeText: ['Best type writer library'],
	textColor: '#1A1D45',
	typeSpeed: 50,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true,
  }).init();

  new AutoTyping({
	id: 'para22',
	typeText: ['Best type writer library'],
	textColor: '#ED1F17',
	typeSpeed: 100,
	typeRandom: false,
	typeDelay: 300,
	cursorSpeed: 300,
	deleteSpeed: 100,
	deleteDelay: 2000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para23',
	typeText: ['Best type writer library'],
	textColor: '#F4BC2B',
	typeSpeed: 100,
	typeRandom: false,
	typeDelay: 100,
	cursorSpeed: 150,
	deleteSpeed: 50,
	deleteDelay: 1500,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para24',
	typeText: ['Best type writer library'],
	textColor: '#A67D03',
	typeSpeed: 50,
	typeRandom: false,
	typeDelay: 400,
	cursorSpeed: 500,
	deleteSpeed: 150,
	deleteDelay: 2000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para25',
	typeText: ['Best type writer library'],
	textColor: '#F24535',
	typeSpeed: 150,
	typeRandom: false,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 100,
	deleteDelay: 1000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para26',
	typeText: ['Best type writer library'],
	textColor: '#0D0D0D',
	typeSpeed: 50,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 50,
	deleteDelay: 1000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para27',
	typeText: ['Best type writer library'],
	textColor: '#F62BCC',
	typeSpeed: 150,
	typeRandom: false,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 10,
	deleteDelay: 1000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para28',
	typeText: ['Best type writer library'],
	textColor: '#3A758C',
	typeSpeed: 30,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para29',
	typeText: ['Best type writer library'],
	textColor: '#62CDD9',
	typeSpeed: 250,
	typeRandom: false,
	typeDelay: 250,
	cursorSpeed: 250,
	deleteSpeed: 250,
	deleteDelay: 2500,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para30',
	typeText: ['Best type writer library'],
	textColor: '#F29E38',
	typeSpeed: 90,
	typeRandom: true,
	typeDelay: 100,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para31',
	typeText: ['Best type writer library'],
	textColor: '#043540',
	typeSpeed: 50,
	typeRandom: true,
	typeDelay: 1000,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para32',
	typeText: ['Best type writer library'],
	textColor: '#05AFF2',
	typeSpeed: 50,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 100,
	deleteSpeed: 160,
	deleteDelay: 1800,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para33',
	typeText: ['Best type writer library'],
	textColor: '#D9C091',
	typeSpeed: 100,
	typeRandom: false,
	typeDelay: 100,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 2000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para34',
	typeText: ['Best type writer library'],
	textColor: '#1A1D45',
	typeSpeed: 50,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para35',
	typeText: ['Best type writer library'],
	textColor: '#ED1F17',
	typeSpeed: 100,
	typeRandom: false,
	typeDelay: 300,
	cursorSpeed: 300,
	deleteSpeed: 100,
	deleteDelay: 2000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para36',
	typeText: ['Best type writer library'],
	textColor: '#F4BC2B',
	typeSpeed: 100,
	typeRandom: false,
	typeDelay: 100,
	cursorSpeed: 150,
	deleteSpeed: 50,
	deleteDelay: 1500,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para37',
	typeText: ['Best type writer library'],
	textColor: '#B0B0EB',
	typeSpeed: 70,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para38',
	typeText: ['Best type writer library'],
	textColor: '#F23D7F',
	typeSpeed: 150,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para39',
	typeText: ['Best type writer library'],
	textColor: '#0ABF04',
	typeSpeed: 90,
	typeRandom: false,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 2000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para40',
	typeText: ['Best type writer library'],
	textColor: '#F2D022',
	typeSpeed: 50,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para41',
	typeText: ['Best type writer library'],
	textColor: '#3A758C',
	typeSpeed: 30,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para42',
	typeText: ['Best type writer library'],
	textColor: '#1A1D45',
	typeSpeed: 50,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para43',
	typeText: ['Best type writer library'],
	textColor: '#ED1F17',
	typeSpeed: 100,
	typeRandom: false,
	typeDelay: 300,
	cursorSpeed: 300,
	deleteSpeed: 100,
	deleteDelay: 2000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para44',
	typeText: ['Best type writer library'],
	textColor: '#B0B0EB',
	typeSpeed: 70,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para45',
	typeText: ['Best type writer library'],
	textColor: '#F23D7F',
	typeSpeed: 150,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para46',
	typeText: ['Best type writer library'],
	textColor: '#0ABF04',
	typeSpeed: 90,
	typeRandom: false,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 2000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para47',
	typeText: ['Best type writer library'],
	textColor: '#F2D022',
	typeSpeed: 50,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true
  }).init();

  new AutoTyping({
	id: 'para48',
	typeText: ['Best type writer library'],
	textColor: '#3A758C',
	typeSpeed: 30,
	typeRandom: true,
	typeDelay: 300,
	cursorSpeed: 200,
	deleteSpeed: 150,
	deleteDelay: 1000,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();

  new AutoTyping({
	id: 'para49',
	typeText: ['Best type writer library'],
	textColor: '#3A758C',
	typeSpeed: 50,
	typeRandom: true,
	typeDelay: 100,
	cursorSpeed: 100,
	deleteSpeed: 250,
	deleteDelay: 800,
	typeInfinity: true,
	textDeleteOptions : {
	  0 : {
		deleteToChar : 17,
		continueThis : 'effect'
	  },
	}
  }).init();