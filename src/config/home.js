// ** For more information on how to edit the config, please read the README.md ** //
// https://github.com/underscorelior/HHS-Club-Template?tab=readme-ov-file#about-section-srcconfigaboutjs

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`;

const secondary_button = {
	display: true,
	text: 'Secondary Button',
	url: 'https://example.com',
};

const carousel = [
	{
		name: 'Latest News',
		description: `Aute deserunt elit enim est cillum. 
			Nulla consectetur nostrud nulla voluptate sit eiusmod pariatur ad. 
			Velit dolore fugiat voluptate enim non nostrud elit culpa pariatur aliquip ad.`,
		image: '/placeholder.png',
	},
	{
		name: 'Image 1',
		description: `Aute deserunt elit enim est cillum. 
			Nulla consectetur nostrud nulla voluptate sit eiusmod pariatur ad. 
			Velit dolore fugiat voluptate enim non nostrud elit culpa pariatur aliquip ad.`,
		image: '/placeholder2.png',
	},
	{
		name: 'Image 2',
		description: `Aute deserunt elit enim est cillum. 
			Nulla consectetur nostrud nulla voluptate sit eiusmod pariatur ad. 
			Velit dolore fugiat voluptate enim non nostrud elit culpa pariatur aliquip ad.`,
		image: '/placeholder3.png',
	},
];

// *** DO NOT EDIT *** //
const home_config = {
	home_page: {
		description: description,
		secondary_button: secondary_button,
		carousel: carousel,
	},
};
export default home_config;
