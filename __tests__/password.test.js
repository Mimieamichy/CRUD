const {isPasswordValid, isPasswordLengthGreaterThan8, doesPasswordContainDigits, doesPasswordContainAlphabets, doesPasswordContainSpecialCharacters} = require("../password")

describe("isPasswordValid", ()=>{
    describe("password length is greater than 8", ()=>{

        test('should return false when length is less than 8', () => {
            // arrange
            const input1 = "abcde"
            const input2 = "hello"

            const expected1 = false;
            const expected2 = false;
            // act
            const result1 = isPasswordLengthGreaterThan8(input1)
            const result2 = isPasswordLengthGreaterThan8(input2)
            // assert
            expect(result1).toBe(expected1)
            expect(result2).toBe(expected2)
        })
        test('should return true when length is greater than 8', () => {
            // arrange
            const input1 = "abcdefhgh"
            const input2 = "hellowor"

            const expected1 = true;
            const expected2 = true;
            // act
            const result1 = isPasswordLengthGreaterThan8(input1)
            const result2 = isPasswordLengthGreaterThan8(input2)
            // assert
            expect(result1).toBe(expected1)
            expect(result2).toBe(expected2)
        })
        test('should return true when length is greater than 8 and string contains white space', () => {
            // arrange
            const input1 = "abc hg h"
            const input2 = "hello world"

            const expected1 = true;
            const expected2 = true;
            // act
            const result1 = isPasswordLengthGreaterThan8(input1)
            const result2 = isPasswordLengthGreaterThan8(input2)
            // assert
            expect(result1).toBe(expected1)
            expect(result2).toBe(expected2)
        })

    })
    // should check that string contains numbers
    describe("password should contain one or more digits",()=>{
        test('should check return false if input does not contain a digit', () => {
          // arrange
          const input1 = "abc"
          const input2 = "he lo"

          const expected1 = false
          const expected2 = false
          // act
          const result1 = doesPasswordContainDigits(input1)
          const result2 = doesPasswordContainDigits(input2)
          // assert
          expect(result1).toBe(expected1)
          expect(result2).toBe(expected2)
        })
        test('should return true if input contains one character and is a digit', () => {
          // arrange
          const input1 = "9"
          const input2 = "0"

          const expected1 = true
          const expected2 = true
          // act
          const result1 = doesPasswordContainDigits(input1)
          const result2 = doesPasswordContainDigits(input2)
          // assert
          expect(result1).toBe(expected1)
          expect(result2).toBe(expected2)
        })
        test('should check return true if input contains a digit', () => {
          // arrange
          const input1 = "ab0de"
          const input2 = "hel10 w0r1d"

          const expected1 = true
          const expected2 = true
          // act
          const result1 = doesPasswordContainDigits(input1)
          const result2 = doesPasswordContainDigits(input2)
          // assert
          expect(result1).toBe(expected1)
          expect(result2).toBe(expected2)
        })

    })
    // should check that string contains alphabets
    describe("password should contain one or more alphabets",()=>{
        test('should check return false if input does not contain an alphabet', () => {
          // arrange
          const input1 = "234 56"
          const input2 = "078 96"

          const expected1 = false
          const expected2 = false
          // act
          const result1 = doesPasswordContainAlphabets(input1)
          const result2 = doesPasswordContainAlphabets(input2)
          // assert
          expect(result1).toBe(expected1)
          expect(result2).toBe(expected2)
        })
        test('should return true if input contains one alphabet', () => {
          // arrange
          const input1 = "7891l7"
          const input2 = "  a89 "

          const expected1 = true
          const expected2 = true
          // act
          const result1 = doesPasswordContainAlphabets(input1)
          const result2 = doesPasswordContainAlphabets(input2)
          // assert
          expect(result1).toBe(expected1)
          expect(result2).toBe(expected2)
        })
        test('should check return true if input contains one or more alphabets', () => {
          // arrange
          const input1 = "ab0de"
          const input2 = "hel10 w0r1d"

          const expected1 = true
          const expected2 = true
          // act
          const result1 = doesPasswordContainAlphabets(input1)
          const result2 = doesPasswordContainAlphabets(input2)
          // assert
          expect(result1).toBe(expected1)
          expect(result2).toBe(expected2)
        })

    })
    // should check that password contains special characters
    describe("password should contain one or more special characters",()=>{
        test('should check return false if input does not contain a special character', () => {
          // arrange
          const input1 = "23456"
          const input2 = "07896"

          const expected1 = false
          const expected2 = false
          // act
          const result1 = doesPasswordContainSpecialCharacters(input1)
          const result2 = doesPasswordContainSpecialCharacters(input2)
          // assert
          expect(result1).toBe(expected1)
          expect(result2).toBe(expected2)
        })
        test('should return true if input contains one special character', () => {
          // arrange
          const input1 = "789/l7"
          const input2 = "a*89"

          const expected1 = true
          const expected2 = true
          // act
          const result1 = doesPasswordContainSpecialCharacters(input1)
          const result2 = doesPasswordContainSpecialCharacters(input2)
          // assert
          expect(result1).toBe(expected1)
          expect(result2).toBe(expected2)
        })
        test('should check return true if input contains one or more special characters', () => {
          // arrange
          const input1 = "ab_0_d/e"
          const input2 = "he|10 w()r1d"

          const expected1 = true
          const expected2 = true
          // act
          const result1 = doesPasswordContainSpecialCharacters(input1)
          const result2 = doesPasswordContainSpecialCharacters(input2)
          // assert
          expect(result1).toBe(expected1)
          expect(result2).toBe(expected2)
        })

    })
    // should check that password is valid
    describe("password should be valid",()=>{
        test('should check return false if input is not a valid password', () => {
          // arrange
          const input1 = "a&b90"
          const input2 = "abc/def&*"
          const input3 = "123/*()+=$#"
          const input4 = "abcd1234"

          const expected1 = false
          const expected2 = false
          const expected3 = false
          const expected4 = false
          // act
          const result1 = isPasswordValid(input1)
          const result2 = isPasswordValid(input2)
          const result3 = isPasswordValid(input3)
          const result4 = isPasswordValid(input4)
          // assert
          expect(result1).toBe(expected1)
          expect(result2).toBe(expected2)
          expect(result3).toBe(expected3)
          expect(result4).toBe(expected4)
        })
        test('should check return true if password is valid', () => {
          // arrange
          const input1 = "abcde fgh1"
          const input2 = "$0r37r0&t"

          const expected1 = true
          const expected2 = true
          // act
          const result1 = isPasswordValid(input1)
          const result2 = isPasswordValid(input2)
          // assert
          expect(result1).toBe(expected1)
          expect(result2).toBe(expected2)
        })

    })


})