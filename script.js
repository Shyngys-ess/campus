const campusData = {
    '1': {
        title: '1 Корпус — Факультет Программирования',
        description: 'Первый корпус полностью ориентирован на разработку программного обеспечения. Здесь расположены современные компьютерные классы со всем необходимым ПО для изучения JavaScript, Python, C++ и мобильной разработки.',
        facilities: ['Лаборатории алгоритмов', 'Кабинеты проектной деятельности', 'IT-Инкубатор для студенческих стартапов']
    },
    '2': {
        title: '2 Корпус — Системное администрирование и Сети',
        description: 'Второй корпус предназначен для практических занятий по сетевым технологиям и системному администрированию. Здесь студенты учатся настраивать сервера и работать с реальным сетевым оборудованием.',
        facilities: ['Сетевая лаборатория Cisco', 'Серверная комната для практик', 'Классы администрирования Linux/Windows']
    },
    '3': {
        title: '3 Корпус — Кибербезопасность и Мероприятия',
        description: 'Третий корпус совмещает в себе специализированные лаборатории защиты информации и зоны для проведения крупных студенческих хакатонов, конференций и лекций от представителей IT-компаний.',
        facilities: ['Центр тестирования кибербезопасности', 'Актовый зал / Коворкинг', 'Зона отдыха и настольных игр']
    },
    'main': {
        title: 'Главный Корпус ВТК',
        description: 'Главный корпус — сердце нашего колледжа. Здесь сосредоточены администрация, приемная комиссия, библиотека с доступом к мировым цифровым базам данных, а также общие лекционные аудитории.',
        facilities: ['Приемная комиссия и деканат', 'Большая цифровая библиотека', 'Студенческая столовая']
    }
};

function updateCampusPage(bodyKey) {
    const data = campusData[bodyKey] || campusData['main'];
    
    document.getElementById('campusTitle').textContent = data.title;
    document.getElementById('campusDescription').textContent = data.description;
    
    const list = document.getElementById('campusFacilities');
    list.innerHTML = '';
    data.facilities.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });

    document.querySelectorAll('.campus-tab').forEach(tab => {
        if(tab.getAttribute('data-body') === bodyKey) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

if (document.getElementById('campusTitle')) {
    const urlParams = new URLSearchParams(window.location.search);
    let currentBody = urlParams.get('body') || 'main';
    
    updateCampusPage(currentBody);

    document.querySelectorAll('.campus-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const bodyKey = tab.getAttribute('data-body');
            updateCampusPage(bodyKey);
            
            history.pushState(null, '', `campuses.html?body=${bodyKey}`);
        });
    });
}