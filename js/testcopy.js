function testSwitch(size) {
    switch(size) {
        case 'small':
            console.log('This chair is too small');
            break;
        case 'medium':
            console.log('This chair is just right');
            break;
        case 'large':
            console.log('This chair is too big');
            break;
        default:
            console.log('This chair is an unknown size.');
    }
}

testSwitch('medium');



