import 'client/exercise-02/ng/services/chuck-norris';

window._app.global_ng_module
.component('layout', {
  templateUrl: 'client/exercise-02/ng/components/layout.html',
  controller: ['chuckNorris', '$scope', function(chuckNorris, $scope) {
    chuckNorris.fetch3Random().then((res) => {
      console.log(res.data.value);
      $scope.facts = res.data.value;
    })
  }]
});

window._app.global_ng_module
.component('fact', {
  templateUrl: 'client/exercise-02/ng/components/facts.html',
  controller: ['chuckNorris', '$scope', function($scope) {
    console.log(this.facts);
    $scope.facts = this.facts;
    console.log($scope.facts);
  }],
  bindings: {
    facts: '='
  }
});
