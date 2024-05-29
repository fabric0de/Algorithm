def solution(nums):
    
    print(len(nums))
    
    unique_pokemon = set(nums)
    print(unique_pokemon)
    
    max_pokemon_to_choose = len(nums) // 2
    print(max_pokemon_to_choose)
    
    return min(len(unique_pokemon), max_pokemon_to_choose)

