import Heading from './components/heading/heading';
import AddImage from './components/add-image/add-image';
import React from 'react';

const heading = new Heading();
heading.render('image');
const image = new AddImage();
image.render();