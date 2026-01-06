
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'The Empire Pivot Door',
    tagline: 'Architectural grandeur.',
    description: '12mm Starphire glass with a bespoke floor-to-ceiling pivot system in satin brass.',
    longDescription: 'Our flagship pivot system offers a weightless rotation on a concealed hydraulic axis. Crafted in our specialized glass factory, each panel features low-iron Starphire glass for absolute transparency.',
    price: 1450,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1552329852-3f820c07aa4d?auto=format&fit=crop&q=80&w=1000',
    gallery: [],
    features: ['Satin Brass Hardware', 'Hydraulic Pivot Hinge', '12mm Starphire Glass']
  },
  {
    id: 'p2',
    name: 'Crittall Style Enclosure',
    tagline: 'Modern industrial heritage.',
    description: 'Architectural black aluminum grids bonded to high-performance safety glass.',
    longDescription: 'A bold statement in architectural design. Hand-bonded grids create a graphic masterpiece that defines the space without blocking the light.',
    price: 1120,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1620626011761-9963d7b69763?auto=format&fit=crop&q=80&w=1000',
    gallery: [],
    features: ['Matte Black Ceramic Grid', 'Telescopic Stabilization', 'Frameless Internal Surface']
  },
  {
    id: 'p3',
    name: 'HJ Horizon Smart Mirror',
    tagline: 'The morning sanctuary.',
    description: '360° halo illumination with CRI 98+ color accuracy and integrated smart interface.',
    longDescription: 'More than a mirror—an experience. Integrated with nano-tech defogging and studio-grade lighting to start your day with clarity.',
    price: 680,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000',
    gallery: [],
    features: ['Variable Color Temp', 'Nano-Heating Anti-Fog', 'Stepless Dimming']
  },
  {
    id: 'p4',
    name: 'HJ SMC Modular Core',
    tagline: 'Precision-molded luxury.',
    description: 'Integrated bathroom chassis molded from aerospace SMC composites.',
    longDescription: 'Constructed under 2,000 tons of pressure, our SMC pods offer a seamless, 100% waterproof environment. The ultimate solution for modern prefab luxury.',
    price: 5400,
    category: 'Home',
    imageUrl: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [],
    features: ['Zero-Seam Waterproofing', 'Anti-Bacterial Surface', '24-Hour Installation']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "The Art of Transparency",
        date: "June 2025",
        excerpt: "Exploring how low-iron glass is redefining the boundaries of interior space.",
        image: "https://images.unsplash.com/photo-1507652313519-d451e12d5b8d?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement("p", null, "Glass is the architect's most vital tool for wellness.")
    },
    {
        id: 2,
        title: "Modular Evolution",
        date: "May 2025",
        excerpt: "Inside our high-pressure molding facility where the future is forged.",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        content: React.createElement("p", null, "Precision is the ultimate luxury in modern construction.")
    }
];

export const BRAND_NAME = 'HJ BATH';
export const BRAND_COLORS = {
  deep: '#9D174D',
  primary: '#D94F33',
  vibrant: '#FB923C'
};
