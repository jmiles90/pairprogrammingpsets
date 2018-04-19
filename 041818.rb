puts"1##########################1"
# Define a method that returns an array where each element is multiplied by its index.

def array_sum_by_index(arr)

end

# puts array_sum_by_index([1,2,3,4,5])==[0,2,6,12,20]
# puts array_sum_by_index([-5,-2,-1,-2,99])==[0,-2,-2,-6,396]

puts "2##########################2"

#Define a method that takes an array and a target; if any two elements in the array equal the target when multiplied together -- return true. Else return false.

def pair_up(arr, target_product)
 end



# puts pair_up([2, 3, 5, 3], 6) == true
# puts pair_up([5, 3, 5], 10) == false
# puts pair_up([5, 3, 5], 25) == true

puts "3##########################3"

# Define a method, #how_many_likes?(sentence) that accepts a string as an 
# argument. Your method should cound the number of times the sentence uses 
# the word "like".

def how_many_likes?(sentence)
  
end

# puts how_many_likes?("i like really like how ruby works") == 2
# puts how_many_likes?("this is like totally like too many like words") == 3



puts "4##########################4"
# Given an array of bids and an actual retail price, return the bid closest to the actual retail price without going over that price. Assume there is always at least one bid below the retail price.
def price_is_right(bids, actual_retail_price)
  
end

# puts price_is_right([13,55,24,99,5], 9)==5
# puts price_is_right([1,2,4,6,8,7],5)==4


puts "5##########################5"

# Define a method, #reverse_digits(int), that reverses the digits of its 
# argument and returns the resulting number.
def reverse_digits(int)
  
end

# puts reverse_digits(1005) == 5001
# puts reverse_digits(12345678) == 87654321

puts "6##########################6"

# Given an array of numbers, return an array of those numbers that have at least n factors (including 1 and the number itself as factors).
# at_least_n_factors([1, 3, 10, 16], 5) => [16] because 16 has five factors (1, 2, 4, 8, 16) and the others have fewer than five factors.
# Consider writing a helper method num_factors
def at_least_n_factors(numbers, n)

end

# puts at_least_n_factors([1,3,10,16],5)==[16]
# puts at_least_n_factors([5,10,15,20,25,30],6)==[20,30]


puts "7##########################7"

# Define a method that accepts an integer as an 
# argument. Your method should return true / false, based on whether or not
# n is prime. Remember, a number is prime if it has no divisors other than 
# 1 and itself.

# ex: 15's divisors are: 1, 3, 5, 15 ==> 15 is not prime!
# ex: 20's divisors are: 1, 2, 4, 5, 10, 20 ==> 20 is not prime!
# ex: 17's divisors are: 1, 17 ==> 17 is prime!

def prime?(int)
  
end

# puts prime?(49) == false
# puts prime?(101) == true

puts "8##########################8"

# Define a method, #remove_w_words(sentence), that accepts a string as an 
# argument. Your method should return a new string, omitting all the words 
# that start with "w"

def remove_w_words(sentence)
  
end


# puts remove_w_words("throw it this way") == "throw it this"
# puts remove_w_words("string with a whole lot of w words") == "string a lot of"

puts "9##########################9"

# Define a method, #max_range(array), that accepts an array of integers as an
# argument. Your method should return the difference between the largest 
# integer and the smallest integer in the array. Assume the array always has 
# at least 2 elements.

# ex: max_range(1, 8, 4) ==> largest = 8, smallest = 1 ==> 8 - 1 ==> 7

def max_range(array)
  
end

# puts max_range([9, 7, 3, 8]) == 6
# puts max_range([10, -15, 100, 30]) == 115

puts "10########################10"

# Return the number of words longer than 7 characters
# "cat cactus balderdash phenomenon amazon" has two words over 7 characters long
# "balderdash" and "phenomenon"
# long_word_count("cat cactus balderdash phenomenon amazon") => 2

def long_word_count(text)
 
end

# puts long_word_count("one reallylong word") == 1
# puts long_word_count("two reallylong words inthisstring") == 2


puts "11########################11"

# Given a sentence string and an array of words, hashtag-ify the words (case-insensitive)
# in the original string and return the updated cool string with hashtags.

def hashtagify(sentence, tags)

end
  
# puts hashtagify("Coding is fun!", ["coding", "fun"]) == "#Coding is #fun!"
# puts hashtagify("Learned about coding.", ["coding"]) == "Learned about #coding." 



puts "12########################12"

# Vigenere's Cipher is a tool for encrypting strings. We'll offset each character
# according to a key sequence. For example, if we encrypt "bananasinpajamas" with the
# key sequence [1, 2, 3], the result would be "ccqbpdtkqqcmbodt":
#
# Word:   b a n a n a s i n p a j a m a s
# Keys:   1 2 3 1 2 3 1 2 3 1 2 3 1 2 3 1
# Cipher: c c q b p d t k q q c m b o d t
#
# Note that offsets should wrap around the alphabet - offsetting 'z' by 1 should
# produce 'a'

# Write a method that takes a string and a key-sequence, returning
# the encrypted word. Assume only lower-case letters are used.

# We're giving you the alphabet as an array if you need it.
# ------------------------------------------------------------------------------

def vigenere_cipher(string, key_sequence)

end

# puts vigenere_cipher("toerrishuman", [1]) == "upfssjtivnbo"
# puts vigenere_cipher("toerrishuman", [1, 2]) == "uqftsktjvobp"
# puts vigenere_cipher("toarrispirate", [1, 2, 3, 4]) == "uqdvskvtjtdxf"
# puts vigenere_cipher("zzz", [1, 2, 1]) === "aba"



""




