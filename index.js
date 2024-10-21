const menuItems = document.querySelectorAll('.nemu-item');

const messagesNotification = document.querySelector('#message-notification');

const messages = document.querySelector('.messages');

const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


const theme = document.querySelector('#theme');
const themeModale = document.querySelector('.customize-theme');

const fontSizes = document.querySelector('.choose-size span');

const changeActiveItem = () =>{
    menuItems.forEach(item =>{
        item.classList.remove('active')
    })
}
menuItems.forEach(item => {
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';

        }
    })
})


const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else{
            user.style.display = 'non';
        }
    })
}

messageSearch.addEventListener('Keyup', searchMessage);

messagesNotification.addEventListener('click', () =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(()=>{
        messages.style.boxShadow = 'none';
    }, 2000);
})

const openThemeModal = () => {
    themeModale.style.display = 'grid';
}

const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModale.style.display = 'none';
    }
}

themeModale.addEventListener('click', closeThemeModal)

theme.addEventListener('click', openThemeModal);

fontSizes.forEach(size =>{
    let fontSize;

    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
    } else if (size.classList.contains('font-size-2')){
        fontSize = '13px';
    } else if (size.classList.contains('font-size-3')){
        fontSize = '16px';
    }
    else if (size.classList.contains('font-size-4')){
        fontSize = '19px';
    }
    else if (size.classList.contains('font-size-5')){
        fontSize = '22px';
    }
    
})