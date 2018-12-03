"use strict";
var util = require("util");
var path = require("path");
var yeoman = require("yeoman-generator");

var SassBoilerplateGenerator = module.exports = function SassBoilerplateGenerator(args, options, config)
{
	yeoman.apply(this, arguments);

	/*this.on("end", function ()
	{
		this.installDependencies({ skipInstall: options["skip-install"] });
	});*/

	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, "../package.json")));
};

util.inherits(SassBoilerplateGenerator, yeoman);

SassBoilerplateGenerator.prototype.askFor = function askFor()
{
	var cb = this.async();

	// have Yeoman greet the user.
	console.log(this.yeoman);
	console.log("\nWelcome to the SASS Boilerplate generator.\n\nThis will scaffold out SASS (SCSS) styles for a new application.\n\nPlease fill in the following to the best of your ability:");

	var prompts = [
		{
			name: "name",
			message: "What is the name of the new style?",
			default: "Project Name"
		},
		{
			name: "description",
			message: "Give me a description on what your style is supposed to do",
			default: "A sample description"
		},

		//author and header info
		{
			name: "authorName",
			message: "Who is the creator of this style?",
			default: "Sean Goresht"
		},

		{
			name: "authorURL",
			message: "What is the site where the author can be reached?",
			default: "http://seangoresht.com"
		},

		{
			name: "authorGitHub",
			default: "srsgores",
			message: "What is your gitHub account?"
		},

		{
			name: "authorTwitter",
			default: "SGoresht",
			message: "What is your Twitter account?"
		},

		{
			name: "authorCompanyName",
			default: "Company Name",
			message: "(optional) What is your company name?"
		},

		//SASS stuff
		{
			name: "includeBasicStyles",
			type: "confirm",
			default: false,
			message: "Would you like to include basic styles?"
		},

		{
			name: "includeIcomoon",
			type: "confirm",
			default: true,
			message: "Would you like to include default Icomoon vector icon font?"
		},

		{
			name: "includeAnimations",
			type: "confirm",
			default: true,
			message: "Would you like to include animations for use with companimation?"
		},
		{
			name: "includeBasicNav",
			type: "confirm",
			default: false,
			message: "Would you like to include nav styles?"
		},
		{
			name: "includeReset",
			type: "confirm",
			default: false,
			message: "Would you like to include a reset?"
		},
		{
			name: "includeTypeHelpers",
			type: "confirm",
			default: false,
			message: "Would you like to include a type stylesheet?"
		},
		{
			name: "includeFormHelpers",
			type: "confirm",
			default: "false",
			message: "Would you like to include a forms stylesheet?"
		}
	];

	this.prompt(prompts, function (props)
	{
		//date helper
		var today = new Date();

		var prefix = today.getUTCMonth() + 1;
		prefix += "-" + today.getDate();
		prefix += "-" + today.getFullYear();

		this.currentDate = prefix;
		this.name = props.name;
		this.description = props.description;
		this.authorName = props.authorName;
		this.authorURL = props.authorURL;
		this.authorGitHub = props.authorGitHub;
		this.authorTwitter = props.authorTwitter;
		this.authorCompanyName = props.authorCompanyName;
		this.includeBasicStyles = props.includeBasicStyles;
		this.includeBasicNav = props.includeBasicNav;
		this.includeReset = props.includeReset;
		this.includeTypeHelpers = props.includeTypeHelpers;
		this.includeFormHelpers = props.includeFormHelpers;

		//scss stuff
		this.includeIcomoon = props.includeIcomoon;
		this.includeAnimations = props.includeAnimations;
		cb();
	}.bind(this));
};

SassBoilerplateGenerator.prototype.app = function app()
{
	//sass files
	this.mkdir("sass");
	this.mkdir("sass/partials");
	this.template("sass/_style.scss", "sass/style.scss");
	if (this.includeFormHelpers) {
		this.template("sass/partials/_forms.scss", "sass/partials/_forms.scss");
	}
	this.template("sass/partials/_grids.scss", "sass/partials/_grids.scss");
	this.template("sass/partials/_helpers.scss", "sass/partials/_helpers.scss");
	this.template("sass/partials/_media-queries.scss", "sass/partials/_media-queries.scss");
	if (this.includeIcomoon) {
		this.mkdir("sass/partials/icomoon");
		this.template("sass/partials/icomoon/_icomoon.scss", "sass/partials/icomoon/_icomoon.scss");
		this.copy("fonts/icomoon/icomoon.eot", "fonts/icomoon/icomoon.eot");
		this.copy("fonts/icomoon/icomoon.svg", "fonts/icomoon/icomoon.svg");
		this.copy("fonts/icomoon/icomoon.ttf", "fonts/icomoon/icomoon.ttf");
		this.copy("fonts/icomoon/icomoon.dev.svg", "fonts/icomoon/icomoon.dev.svg");
	}

	if (this.includeTypeHelpers) {
		this.template("sass/partials/_type.scss", "sass/partials/_type.scss");
	}

	if (this.includeAnimations) {
		this.template("sass/partials/_animations.scss", "sass/partials/_animations.scss");
	}

	if (this.includeBasicNav) {
		this.template("sass/partials/_nav.scss", "sass/partials/_nav.scss");
	}

	if (this.includeBasicStyles) {
		this.template("sass/partials/_base.scss", "sass/partials/_base.scss");
	}
	this.template("sass/partials/_variables.scss", "sass/partials/_variables.scss");
	this.template("sass/partials/_mixins.scss", "sass/partials/_mixins.scss");
	//bower dependency
	this.template("_config.rb", "config.rb");
	this.template("_package.json", "package.json");
	this.copy(".gitignore", ".gitignore");
};

SassBoilerplateGenerator.prototype.projectfiles = function projectfiles()
{
	this.copy("editorconfig", ".editorconfig");
	this.copy("jshintrc", ".jshintrc");
};
