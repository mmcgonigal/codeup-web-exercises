'use strict'

//1. get url
//2. .done method. .done(function{})
//3. console.log "data" "status" make sure they are good.
//3-1 how is data pulled ?
//4. to go thru , array ... forEach -->jquery : .each()
//4-1.each(function(싱글elememt//어레이이 안의 인덱스 이기 때문에 단수형){
//what do you want this to do while, loop through array ?!

$.get('https://jsonplaceholder.typicode.com/comments')//1
    .done(function(data,status,jqXhr){//2
        console.log(data); //  -- 500 of object are in a array. 3-1
        //console.log(status)//3
        //console.log(jqXhr)
        $.each(data,function(i,element){ //each accept 2 parameter : 1.data ,2.function

                // $('#container').append('<tr>','<td>' + element.postId + '</td>');
                // console.log(element.postId)
                // $('#container').append('<td>'+ element.id+ '</td>');
                // $('#container').append('<td>'+ element.name + '</td>');
                // $('#container').append('<td>'+ element.email + '</td>');
                // $('#container').append('<td>'+ element.body + '</td>','</tr>');
                let tableData =`<tr>
                        <td>${element.postId}</td>
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.email}</td>
                        <td>${element.body}</td>
                        </tr>`
                $('#container').append(tableData)

        })

    })


////////////////////////// This is Ajax Blog exercise/////////////////

//1. At minimum, Ajax blog need empty div with id of posts.
//2. add bootstrap theme to the file as well.
//3. use Ajax to load the contents of blog.json and add the data from it to #posts div.
//add additional entries to blog.json and make sure changes are reflected.


