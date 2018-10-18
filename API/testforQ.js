var AFRAME = require('aframe');
function o(tekst){ console.log(tekst)  }
//$$$$$$$$$$$$$$$$$$$$$$$$$$$
//  test 1  module to test
AFRAME.registerComponent('big', {
    init: function () {
        this.el.setAttribute('scale', '2 2 2');
        console.log("->  AFRAME.registerComponent('big', {")
    }
});
//  test 2  example function to test
// function highScore(){
//     //global var score=0
//     var score=10; //test value
//     console.log("highScore="+score);
//     return score;
// }
//  test 3  Component from Game to test
/*
This component:
    Trigger: by event-collider in entity with id="counter"
    event-set__hitstart = "testcomponent:"
    Purpose: count hits, rigger sound, trigger animation, update entity '#scoreBoard'
    it also give feedback to the console during developing
    Description: When a ball falls down in the 'Tuba' and collides with entity '#counter'
    Three things will happen:
    1 'score' is updated
    2 the 'scoreBoard' is updated (and displayed)
    3 sound is played
    4 animation is triggered
Unit testing: point 1 and 2 are suited for unit testing
*/
AFRAME.registerComponent('testcomponent', {
    init: function () {
        var el = this.el;
        console.log("->  AFRAME.registerComponent('testcomponent', {..")
    },
    updateSchema: function () {
        score++;
        var el = this.el;
        var myScene = document.querySelector('a-scene');
        var scoreBoard = myScene.querySelector('#scores');
        var spinwheel = myScene.querySelector('#counterv');
        var popsound = myScene.querySelector('#twang');
        el.setAttribute('int',score);
        console.log("update ! Score = "+score);
        console.log("highScore-function: "+highScore());
        var scoretxt = 'value: Score '+score.toString();
        scoreBoard.setAttribute('text', scoretxt);
        popsound.components.sound.playSound();
        spinwheel.emit('spin');
    }
});
//--------------------------------------------------------------------------
'use strict';
var QUnit = require('../qunit-extras');
QUnit.module('qunit-extras');
QUnit.test('Some test pass with a title', function(assert) {
    assert.expect(4);
    assert.strictEqual(1, 1, 'foo');
    assert.strictEqual(2, 2, 'bar');
    assert.strictEqual('a', 'a', 'baz');
    assert.strictEqual('b', 'b', 'qux');
});
QUnit.test('Some test fail with a title', function(assert) {
    assert.expect(4);
    assert.strictEqual(1, 2, 'foo');
    assert.strictEqual(2, 2, 'bar');
    assert.strictEqual('a', 'a', 'baz');
    assert.strictEqual('b', 'b', 'qux');
});
QUnit.config.asyncRetries = 10;
QUnit.config.hidepassed = true;
QUnit.config.noglobals = true;
QUnit.load();
QUnit.start();

//read about module: https://api.qunitjs.com/QUnit/module
QUnit.module('module test components', {
    before: function () {
        o("func in QUnit.module before function before create a-scene")
        var scene = document.createElement('a-scene');
        document.querySelector('#qunit-fixture').appendChild(scene);
        o("displaying a-scene element: "+scene)
        console.log("->  MODULE : a-scene created")
    },
    after: function () {
        var scene = document.querySelector('#qunit-fixture > a-scene');
        scene.parentNode.removeChild(scene);
        console.log("->  a-scene removed")
    }
});
//  Test 3
console.log("Test Module testcomponent ->    -------------------------------------------------------")
QUnit.test('Score increases, testmodule', function (assert) {
    //o('* inside qunit.ttest 1');
    var entity=$('#score')
    var entity = document.createElement('a-entity');
    entity.setAttribute('id','score')
    entity.setAttribute('sound','src: twang_')
    //entity.setAttribute('geometry','primitive:cylinder; height:0.02; radius:0.20')
    entity.setAttribute('primitive','cylinder')
    entity.setAttribute('height','0.2')
    entity.setAttribute('radius','0.22')
    entity.setAttribute('position','0.24 1.8 -2.84')
    entity.setAttribute('visible','false')
    entity.setAttribute('rotation','0 0 75')
    entity.setAttribute('aabb-collider','.ball')
    entity.setAttribute('event-set__hitstart','testcomponent:')
    entity.setAttribute('int','13')
    var scene = document.querySelector('#qunit-fixture > a-scene');
    scene.appendChild(entity);
    console.log( "     var entity.getAttribute('aabb-collider')   = "+ entity.getAttribute('aabb-collider') )
    // Wait for the component to be loaded
    var done = assert.async()
    entity.addEventListener('loaded', function () {
        // Actual test
        o('* Actual test - testcomponent - begins ...')
        var score_    = entity.getAttribute('score')
        var collider_ = entity.getAttribute('aabb-collider')
        var radius_   = entity.getAttribute('radius')
        var height_   = entity.getAttribute('height')
        var int_      = entity.getAttribute('int')
        assert.equal( collider_ ,  '.ball' , "collider")
        assert.equal( radius_ , '0.20' , "Radius")
        assert.equal( height_ , '0.22', "Height")
        assert.equal( int_ , '13', "Score")
        o('* Actual test (3) ended')
        done();
    });
});
// qunit - DOM.
QUnit.module('module test components', {
    before: function () {
        o("func in QUnit.module DOM")
        var title_ = document.createElement('title');
        document.querySelector('#qunit-dom').appendChild(title_);
        // DOM elements used by all assertions. Make them here
        title_.innerHTML="tittel"
        title_.setAttribute('id','domTitle') //gives an id to the title element
        //o("displaying <title> element: "+title_.innerHTML)
        //console.log("->  MODULE : DOM created")
    },
    after: function () {
        var title = document.querySelector('#qunit-dom > title');
        title.parentNode.removeChild(title);
        console.log("-> <title> removed")
    }
});
QUnit.test('Title test', function(assert) {
    titleElement = document.querySelector('#domTitle')
    //console.log("  titleElement.innerHTML = "+titleElement.innerHTML)
    document.getElementById("domTitle").innerHTML = "Title changed!";
    //var titleText=document.getElementById("domTitle").innerHTML
    //console.log('titleText 1 '+titleText)
    assert.dom('#domTitle').hasText('title');
    assert.dom('#domTitle').hasAnyText();
    assert.dom('#domTitle').includesText('changed');
    assert.dom('#domTitle').doesNotIncludeText('Welcome');
});
