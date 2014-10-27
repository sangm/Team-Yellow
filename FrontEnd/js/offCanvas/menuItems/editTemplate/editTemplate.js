angular.module('myApp.directives.editTemplate', [
	'tg.dynamicDirective',
	'ui.sortable',
	'mm.foundation.dropdownToggle'
]).

///////////////////////////////// Directives //////////////////////////////////
	directive('editTemplate', function() {
		return {
			restrict: 'A',
			templateUrl: "Templates/offCanvas/menuItems/editTemplate/edit-template-menu.html"
		};
	})./********************** End editTemplate Directive **********************/

	directive("ngFileSelect",function(){

		return {
			link: function($scope,el){
				
				el.bind("change", function(e){
				
					$scope.file = (e.srcElement || e.target).files[0];
					$scope.getFile();
				})
				
			}
			
		}
		
	})./********************** End NgFileSelect Directive **********************/
/******************************* End Factories *******************************/


////////////////////////////////// Factories //////////////////////////////////
	factory('editTemplateFactory', function() {

		//////////////////////////////// Variables ////////////////////////////////
			var factory = {};
			var templateInfo = {
				links: []
			};

		/////////////////////////// Push Link Function/////////////////////////////
		//	Used by EditTemplateCtrl to append a new link to the 
		//	templateinfo.links[]
		/*************************************************************************/
			factory.pushLink = function(linkName) {
				templateInfo.links.push(linkName);

				console.log('\t\t' + 'templateInfo.links: ' + templateInfo.links);
			};

		/////////////////////////// Get Links Function ///////////////////////////
		//	1)	Used by EditTemplateCtrl to initialize the $scope.links variable.
		////	2)	Used by EditTemplateCtrl addLink function to set $scope.links 
		////			once a new link has been added

			factory.getLinks = function() {
				console.log('\n' + 'Inside Edit Templates getLinks function');
				return templateInfo.links;
			};

		/////////////////////////// Swap Array Elements ///////////////////////////
		factory.swap = function(newIndex, oldIndex) {
			var replacedValue = templateInfo.links[newIndex];
			templateInfo.links.splice(newIndex, 1, templateInfo.links[oldIndex]);
			templateInfo.links.splice(oldIndex, 1, replacedValue);
		}

		return factory;
	}).	/*********************** End editTemplateFactory ***********************/

/******************************* End Factories *******************************/


///////////////////////////////// Controllers /////////////////////////////////

	////////////////////////////// EditTemplateCtrl /////////////////////////////
	controller('EditBandedTemplateCtrl', function($scope) {

	}).	/********************* End EditBandedTemplateCtrl **********************/

	////////////////////////////// EditTemplateCtrl /////////////////////////////
	controller('EditTemplateCtrl', function($scope,myFactory) {
		$scope.templateChoice;

		$scope.getTemplateChoice = function() {
			$scope.templateChoice = myFactory.getTemplate();
		};
	}).	/************************ End EditTemplateCtrl *************************/

	/////////////////////////////// EditLinksCtrl ///////////////////////////////
	controller('EditLinksCtrl', function($scope,editTemplateFactory) {

		$scope.links = editTemplateFactory.getLinks();

			//	A function to add a new link to there page.
		$scope.addLink = function() {
			$scope.linkName = prompt("Please enter link name", "Home");

				//	Abort adding the new link if new links name already exists.
			if($scope.links == $scope.linkName) {
				alert('You may not have multiple links with the same name.')
				return;
			}

				//	Validate that the new link is not undefined or an empty string.
			if($scope.linkName) {
				editTemplateFactory.pushLink($scope.linkName);
			}

			console.log('Links: ' + $scope.links);

		};	// End addLink()

		$scope.sortableOptions = {
			connectWith: ".apps-container",
			update: function(e, ui) {
				map($scope.items, 0, $scope.items.length);
			}
		};

		$scope.rootItem = {
			items: [
				{
					title: 'Item 1',
					deepness: 0,
					items: []
				},	// End "Item 1" 
				{
					title: 'Item 2',
					deepness: 0,
					items: [
						{
							title: 'Item 2.1',
							deepness: 1,
							items: []
						},	// End <Item 2.1>

						{
							title: 'Item 2.2',
							deepness: 1,
							items: []
						}	// End <Item2.2>
					]	// End Item2/ls
				}	// End <Item 2>
			]	// End RootItem/ls
		};	// End <$scope.rootItems>
			//	Set Variable for links
		$scope.items = $scope.rootItem.items;

		$scope.getView = function(item) {
			if(item && index == 0) {
				return 'partials/editTemplates/nestable-item.html';
			}
			return;
		};

		var map = function(obj, depth, length) {
			for(var i = 0, l = obj.length ; i < l; i++) {
				obj[i].deepness = depth;
				console.log('Title: '+ obj[i].title + '\n\tDeepness: ' + 
					obj[i].deepness);

				if(obj[i].items.length > 0) {
					map(obj[i].items, depth+1);
				}
			};
		};

	}).	/************************* End EditLinksCtrl ***************************/

	/////////////////////////////// UploadCtrl ///////////////////////////////
	controller('UploadCtrl', function ($scope, fileReader) {
		console.log('Inside UploadController');
		$scope.getFile = function () {
			$scope.progress = 0;
			fileReader.readAsDataURL($scope.file, $scope)
				.then(function(result) {
					$scope.imageSrc = result;
				});
		};

		$scope.$on("fileProgress", function(e, progress) {
			$scope.progress = progress.loaded / progress.total;
		});

	});

	///////////////////////////// fileReaderFactory /////////////////////////////
	myApp.factory('fileReader', function($q, $log) {
		console.log('fileReader Factory initialized');
		var fileReader = function ($q, $log) {
 
				var onLoad = function(reader, deferred, scope) {
						return function () {
								scope.$apply(function () {
										deferred.resolve(reader.result);
								});
						};
				};
 
				var onError = function (reader, deferred, scope) {
						return function () {
								scope.$apply(function () {
										deferred.reject(reader.result);
								});
						};
				};
 
				var onProgress = function(reader, scope) {
						return function (event) {
								scope.$broadcast("fileProgress",
										{
												total: event.total,
												loaded: event.loaded
										});
						};
				};
 
				var getReader = function(deferred, scope) {
						var reader = new FileReader();
						reader.onload = onLoad(reader, deferred, scope);
						reader.onerror = onError(reader, deferred, scope);
						reader.onprogress = onProgress(reader, scope);
						return reader;
				};
 
				var readAsDataURL = function (file, scope) {
						var deferred = $q.defer();
						 
						var reader = getReader(deferred, scope);         
						reader.readAsDataURL(file);
						 
						return deferred.promise;
				};
 
				return {
						readAsDataUrl: readAsDataURL  
				};
		};
	});
