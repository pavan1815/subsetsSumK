
document.getElementById("subsetForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var numbersInput = document.getElementById("numbers").value;
    var targetSumInput = parseFloat(document.getElementById("targetSum").value);
    
    var numbers = numbersInput.split(",").map(Number);
    var subsets = generateSubsets(numbers, targetSumInput);
    
    var resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "";
    
    if (subsets.length > 0) {
      var resultText = "<h3>Subsets with sum equal to " + targetSumInput + ":</h3>";
      resultText += "<ul>";
      for (var i = 0; i < subsets.length; i++) {
        resultText += "<li>" + subsets[i].join(", ") + "</li>";
      }
      resultText += "</ul>";
      resultContainer.innerHTML = resultText;
    } else {
      resultContainer.innerHTML = "<p>No subsets found with sum equal to " + targetSumInput + ".</p>";
    }
  });
  
  function generateSubsets(numbers, targetSum) {
    var subsets = [];
    
    function backtrack(currentSubset, startIndex, currentSum) {
      if (currentSum === targetSum) {
        subsets.push(currentSubset.slice());
      }
      
      if (currentSum >= targetSum) {
        return;
      }
      
      for (var i = startIndex; i < numbers.length; i++) {
        currentSubset.push(numbers[i]);
        backtrack(currentSubset, i + 1, currentSum + numbers[i]);
        currentSubset.pop();
      }
    }
    
    backtrack([], 0, 0);
    
    return subsets;
  }
  
